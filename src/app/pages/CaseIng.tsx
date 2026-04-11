import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function CaseIng() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFF8F0] py-20 border-b-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-[#374151] font-bold mb-8 hover:text-[#FF8A5B] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to all cases
          </Link>
          <h1 className="text-5xl font-bold text-[#374151] mb-4">
            <span className="bg-[#FFC133] px-4 py-2 border-4 border-[#374151]">ING Netherlands</span>
          </h1>
          <p className="text-2xl text-gray-600 mt-6 border-l-6 border-[#FF8A5B] pl-4">
            Is "netflix for flats" a good idea?
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <section className="border-b-4 border-[#374151]">
        <div className="max-w-5xl mx-auto">
          <ImageWithFallback
            src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317ef70f2c3a950cf279_ingcover.jpg"
            alt="ING Netherlands case study cover"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-6 inline-block border-b-8 border-[#FFC133] pb-2">
            Overview
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The purpose of the project was to validate the given example of a business model (in fintech-real
            estates industry) by a series of experiments and alternatively steer a new, pivoted model. My team
            realized the project in ING Innovation Studio in Amsterdam and it was conducted in authorial lean
            startup methodology. The role of mine was to plan, prepare, and conduct validation experiments. So
            far it was my the most intensive learning experience, thanks to my teammates, who were senior
            specialists.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 bg-[#FFF8F0] border-y-4 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Contribution", value: "UX research, Business research" },
              { label: "Context", value: "Commercial project, 6-months duration" },
              { label: "Team size", value: "5-7 people (other roles: business lead, customer lead, tech lead, experiment leads)" },
              { label: "Dates", value: "09.2017 \u2013 02.2018" },
              { label: "Tools", value: "Instapages (landing page generator), Google AdWords" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-5 border-4 border-[#374151]">
                <span className="font-bold text-[#374151] text-sm uppercase tracking-wide">{item.label}</span>
                <p className="text-gray-600 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            The main deliverables/learning points
          </h2>
          <ul className="space-y-4">
            {[
              "Understanding and practising PACE framework (lean-startup methodology framework designed by ING) for business model validation",
              "The pivot of the original idea, changing focus from renting service to maintenance service, the change based on research insight",
              "Quantitative measurements of interest by using smoke tests (landing pages) shown which country are the best markets to obtain customers",
              "Understanding the usage of analytics to conduct online experiments",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="w-8 h-8 bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center mr-4 mt-0.5 shrink-0 font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-600 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg mt-6 bg-[#FFF8F0] p-4 border-4 border-[#374151]">
            As a team, we obtained substantial knowledge about the problems and needs of the real estate market
            and in qualitative research. The final prototype of the solution was rated positively by test
            participants, quantitative tests in the Netherlands shown a good potential of the idea.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 border-4 border-[#FFC133]">
              <h3 className="text-xl font-bold text-[#374151] mb-4 bg-[#FFC133] inline-block px-3 py-1 border-2 border-[#374151]">
                Product \u2013 Customer fit phase
              </h3>
              <ul className="space-y-2">
                {["Individual interviews", "Advert tests", "5 second tests", "Hypothesis canvas", "Ideation workshop", "Fake door tests"].map((item) => (
                  <li key={item} className="text-gray-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-[#FF8A5B] mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 border-4 border-[#FFC133]">
              <h3 className="text-xl font-bold text-[#374151] mb-4 bg-[#FF8A5B] text-white inline-block px-3 py-1 border-2 border-[#374151]">
                Product \u2013 Market fit phase
              </h3>
              <ul className="space-y-2">
                {["Surveys", "Hypothesis canvas", "Fake door tests"].map((item) => (
                  <li key={item} className="text-gray-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-[#FF8A5B] mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product - Customer fit phase */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            Product \u2013 Customer fit phase
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The starting point of our project was receiving a draft of a business model. Our goal was to check
            whatever proposed BM is based on accurate assumptions. The original idea was subscription-based
            service for tenants, who often change the place where they live. By paying a fixed amount of money
            per month, they could change their long-term accommodation across different countries. The business
            model also assumed that landlords might have a problem with 100% utilisation of their properties.
            We were conscious that mentioned assumptions could be false or positive depending on different
            countries.
          </p>

          {/* Hypothesis canvas image */}
          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106831943afc0e194b33ca1_ing1.png"
              alt="Classification of assumptions"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            From the very beginning, we were working with hypothesis canvas, according to ING PACE methodology.
          </p>

          {/* Advert tests */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our first test was a test of general interest in{" "}
            <strong>different value propositions in 3 countries \u2013 the Netherlands, France and Germany.</strong>{" "}
            A tool that was used was Google Ads \u2013 We posted 3 different ads emphasising on 3 different
            aspects of the value proposition (for the tenant side) \u2013 safety looking for a flat, finding a
            flat quickly, moving abroad services. The biggest CTR in all countries was related to the trust
            aspect, that gave us preliminary feeling about the main value for tenants.
          </p>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610683cb6dcf0e5846cbdeb6_ing2.png"
              alt="Visualization of adverts"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            One type of advert, that was used to compare interest in different issues among set of countries
          </p>

          {/* Interviews */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Yet the biggest role in research played individual interviews \u2013{" "}
            <strong>we conducted 32 interviews</strong> both with tenants and landlords (Dutch people). Based on
            them we discovered that tenants don't want to think about moving when they just find a flat \u2013 they
            didn't really see a value in subscription housing service. Mostly their problems were related to
            finding a flat at all. On the other side,{" "}
            <strong>landlords didn't complain about breaks in rents</strong> and surprisingly{" "}
            <strong>the biggest problem was a maintenance part.</strong> Landlords were not satisfied with the
            current market situation with handymen \u2013 according to the landlord's opinion craftsmen are
            difficult to reach also, often not trustworthy.
          </p>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610684b01d53d1bd3d07201d_ing3.png"
              alt="Pains and needs from a landlord's perspective"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            Pains and needs from a landlord's perspective
          </p>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61068522b1dafe255c67ca64_ing4.png"
              alt="Generation of ideas"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            Generation of ideas
          </p>

          {/* Pivot & ideation */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Based on those insights we decided to pivot proposed business models to tools for landlords, which
            would help with a maintenance property. To help ourselves to formulate a business idea in a better
            way, we organized <strong>an ideation workshop.</strong>
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Still, the new idea required quantitative validation. For that,{" "}
            <strong>we used fake door tests.</strong> We created a website which promoted service as it would
            already exist, asking users for leaving their contact data if they would like to participate in beta
            tests. From our perspective, such registration could be proof of value proposition appreciation. To
            make sure that the website is understandable and present the value proposition as good as it is
            possible, <strong>I conducted a session of 5-second tests.</strong>
          </p>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106879769245430119343ce_ing6.png"
              alt="Fragment of landing page addressed for the Dutch market"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            Fragment of landing page addressed for the Dutch market
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            The results of smoke tests went slightly below the expected conversion rate (around 2% comparing to
            2,5%). Fake door tests for a side of handymen went above the expected conversion rate. The tests
            were performed on the Dutch market. The result classified the team to move to the next stage of the
            validation process \u2013 market fit.
          </p>
        </div>
      </section>

      {/* Product - Market fit phase */}
      <section className="py-16 bg-[#FFF8F0] border-y-4 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            Product \u2013 Market fit phase
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            According to our business research German market was more promising than explored Dutch market.
            Therefore we moved our all tests there. To explore the needs of german landlords and handymen we
            hired German UX research agency, which conducted qualitative research connected with prototype
            testing \u2013 we just had to analyse the results.
          </p>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610688dc46a51142e21c3ca0_ing7.png"
              alt="Exemplary screens of the app prototype tested with the German users"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-10 italic text-center">
            Exemplary screens of the app prototype tested with the German users
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We also needed quantitative validation \u2013 so we wanted do develop another landing page, for the
            German market. However this time, we also decided to conduct a survey addressed for craftsmen \u2013 to
            adjust value proposition to that market.{" "}
            <strong>In total, we got around 50 responses and main conclusions were:</strong>
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Payment of time is sometimes an issue",
              "Suppliers don't like lead generation \u2013 they prefer to get assured jobs",
              "Suppliers believe that current bidding systems contribute to worse quality of jobs",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 bg-[#FF8A5B] mr-3 mt-2.5 shrink-0"></span>
                <span className="text-lg text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-4 border-4 border-[#374151]">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610689d0be8cd0614356aa26_ingscreens.jpg"
              alt="Screens of German landing page"
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 italic text-center">
            Screens of German landing page \u2013 state before fixing copywriting/visual issues
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#374151] mb-6 inline-block border-b-8 border-[#FFC133] pb-2">
            The outcomes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed bg-[#FFF8F0] p-6 border-4 border-[#374151]">
            Thanks to this complex research project I had an opportunity to learn how to mix different research
            methods and how to cooperate in lean methodology. I could understand how to design more difficult
            research methods like fake door tests. Finally, we bring a lot of knowledge to the organization
            (ING) in the area of real estates, which could be used in similar projects.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF8F0] border-t-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-8 border-[#374151] p-12 bg-white">
            <h2 className="text-4xl font-bold text-[#374151] mb-6 border-b-8 border-[#FFC133] inline-block pb-2">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <p className="text-xl text-gray-600 mb-8 mt-6">
              I'm always open to discussing new projects and creative opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC133] text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all hover:translate-y-[-4px] font-bold"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
