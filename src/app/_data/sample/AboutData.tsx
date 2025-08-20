import SvgHandShake from "@/app/_components/icons/SvgHandShake";
import SvgMap from "@/app/_components/icons/SvgMap";
import SvgTarget from "@/app/_components/icons/SvgTarget";

export const AboutData = {
    intro:`We are expert partner in Agriculture, Services, Hotels And Hospitality, 
    Real Estate, Mining & Telecommunication.`,
    title: "Company Culture",
    desc: `Culture is an essential aspect of any organization. Swetang believes that the 
    workplace must be conducive to shared work, free from abuse, and foster an atmosphere 
    that engenders productivity. This is the role of culture. Swetang strives to foster a 
    culture of freedom and open communication through transformative leadership.`,
    aboutUs: <>
        <p className="font-light text-2xl mb-4">
            Trayak Consultancy (Private) Limited is a private limited liability 
            company incorporated and based in Zimbabwe whose mission and vision are to
            drive business development, foster and facilitate key strategic business 
            networks and collaboration within the AfrAsian markets. The company’s mission is: -
        </p>
        <p className="mx-[2rem] pl-[1rem] italic font-light text-2xl border-l-3 border-amber-400">
            “To help all our clients and stakeholders in creating brands and businesses that 
            can sustainably leverage on and maximumly utilise resources to best profit advantage 
            in a socially sensitive and beneficial manner.”
        </p>
    </>,
    commitment: {
        title: "Our Commitment",
        desc: <>
            <p className="mb-3">
                Trayak Consultancy supports enterprises successfully in Africa, following our tried 
                and tested process thoroughly, and giving our clients a clear and articulated pathway 
                to achieve results.
            </p>
            <p>Providing more than consultancy, we are the field expansion partner.</p>
        </>,
        img: "/assets/img/commit.jpg",
    },
    approach: [
        {
            id: 1, 
            icon: <SvgTarget css="fill-amber-500" />, 
            title: "1 - Strategy", 
            desc: "We start with a brand discovery to understand your business expansion goals.",
        },
        {
            id: 2, 
            icon: <SvgMap css="fill-amber-500 w-[5rem]" />, 
            title: "2 - Planning", 
            desc: "We develop your bespoke strategy detailing all the activities that will need to be carried out to meet your goals.",
        },
         {
            id: 3, 
            icon: <SvgHandShake css="fill-amber-500" />, 
            title: "3 - Implementation", 
            desc: "As your local partner, we execute, monitor the progress against the plan to ensure deadlines and goals are met.",
        },
    ]

}