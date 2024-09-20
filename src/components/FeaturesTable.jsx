import PropTypes from "prop-types"

import { getProviderFeaturesFromId, features, featureTranslation, featureValueTranslations } from "../constants"
import {
  ShieldCheck,
  BarChart,
  Key,
  KeyRound,
  KeySquare,
  Layers,
  MapPin,
  Map,
  DollarSign,
  FileText,
  Columns,
  Server,
  Globe,
  Link,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

const featureValueToText = (merged, feature) => {
  if (typeof merged[feature] === 'boolean') {
    return merged[feature] ? 'Yes' : 'No'
  } else if (Array.isArray(merged[feature])) {
    return merged[feature].join(', ')
  } else if (merged[feature] instanceof Object) {
    if (merged[feature]['currency']) {
      return `${merged[feature]['currency']}${merged[feature]['value']}`
    } else if (merged[feature]['ports']) {
      return Object.keys(merged[feature]['ports']).map(protocol => `${protocol}: ${merged[feature]['ports'][protocol]}`).join(', ')
    } else if (merged[feature]['link']) {
      return <a href={merged[feature]['link']} target="_blank">{merged[feature]['text'] || "Link"}</a>
    } else if (merged[feature]['protocols']) {
      return merged[feature]['protocols'].join(', ')
    } else if (merged[feature]['types']) {
      return merged[feature]['types'].join(', ')
    } else {
      return merged[feature]['value'];
    }
  } else {
    if (featureValueTranslations[feature]) {
      return featureValueTranslations[feature][merged[feature]]
    } else {
      return merged[feature] || ''
    }
  }
}
const featureValueBoolToText = (merged, feature) => {

    if (merged?.[feature]?.hasOwnProperty('bool')) {
      return merged[feature]['bool'] ? 'Yes: ' : 'No'
    }
}

export function FeaturesTable({ provider = '' }) {
  const providerFeatures = getProviderFeaturesFromId(provider)

  if (!providerFeatures) {
    return null
  }

  const merged = {...features, ...providerFeatures};

  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {Object.keys(merged).map((feature) => {
          let icon;

          switch(feature) {
            case '2fa':
              icon = <ShieldCheck />;
              break;
            case 'analysis-api':
              icon = <BarChart />;
              break;
            case 'credential-api':
              icon = <Key />;
              break;
            case 'revoke-api-credential':
              icon = <KeyRound />;
              break;
            case 'shared-secret-auth':
              icon = <KeySquare />;
              break;
            case 'free-tier':
              icon = <Layers />;
              break;
            case 'locations':
              icon = <MapPin />;
              break;
            case 'location-based-routing':
              icon = <Map />;
              break;
            case 'pay-per-gb':
              icon = <DollarSign />;
              break;
            case 'overage':
              icon = <FileText />;
              break;
            case 'billing-model':
              icon = <Columns />;
              break;
            case 'firewall-busting-ports':
              icon = <Server />;
              break;
            case 'whitelabel-own-domain':
              icon = <Globe />;
              break;
            case 'documented-ips':
              icon = <Link />;
              break;
            case 'documentation-url':
              icon = <BookOpen />;
              break;
            default:
              icon = <HelpCircle />;
          }
          return (
            <div key={feature} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
              <div  className="p-4 md:p-5">
                <div className="flex gap-x-5">
                  {icon}
                  <div className="grow">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      {featureTranslation[feature] || feature}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {featureValueBoolToText(merged, feature)}{featureValueToText(merged, feature)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

FeaturesTable.propTypes = {
  provider: PropTypes.string,
};
