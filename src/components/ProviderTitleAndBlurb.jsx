import PropTypes from "prop-types"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { getProviderTitleFromId, getProviderBlurbFromId } from "../constants"
import { ProviderLogo } from "./ProviderLogo"


export function ProviderTitleAndBlurb({ provider = '' }) {
  const name = getProviderTitleFromId(provider)
  const blurb = getProviderBlurbFromId(provider)


  return (
    <div className="grid gap-12">
      <div>
        <ProviderLogo provider={provider} height="150px" />

        <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
          {name}
        </h2>
        <Markdown remarkPlugins={[remarkGfm]} className="prose mt-3 text-gray-800 dark:text-neutral-400 max-w-full">{blurb}</Markdown>
      </div>
    </div>
  )
}

ProviderTitleAndBlurb.propTypes = {
  provider: PropTypes.string,
};
