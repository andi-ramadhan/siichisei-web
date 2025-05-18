import { ArrowRight } from "./icons/ChevronArrow";
import points from "../utils/discordInsightPoints";

const arrowRight = <ArrowRight className="w-7" />

const DiscordInsight = () => {
  return (
    <section id='DiscordInsight' className="font-inter">
      <div className="container shadow-2xl m-auto flex flex-col items-center my-5 py-15 rounded-lg bg-radial-[at_100%_-50%] from-bg-base-orange to-blue-50 to-50%">
        <div className="flex flex-row">
          <h2 className="m-5 px-2 text-6xl font-medium text-word-blue text-shadow-xs text-shadow-white">
            Live Teaching at Discord
          </h2>
        </div>
        <div className="shadow-md shadow-gray-400 py-5 rounded-lg">
          <img
            src="/discord-ss.png"
            alt="Discord live teaching screenshot"
            className="w-150 p-5"
          />
        </div>
        <dl className="p-12 text-gray-700 break-normal">
          {points.map((point, index) => (
            <div key={index}>
              <div className="flex flex-row text-2xl items-center">
                {arrowRight}
                <dt className="px-3 font-medium">
                  {points.title}
                </dt>
              </div>
              <dd className="px-10 py-2 text-lg text-wrap w-5xl">{points.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default DiscordInsight;