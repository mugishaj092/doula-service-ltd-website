'use client'
import { images } from "@/utils/constant/images";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Faq = () => {
    const faqs = [
        {
            question: "What is a doula?",
            answer:
                "A doula is a non-medically trained professional who provides continuous physical, emotional, and informational support to women before, during, and after birth."
        },
        {
            question: "How do doulas improve maternal and birth outcomes?",
            answer:
                "Doulas help reduce labor duration, decrease the need for pain relief, lower cesarean section rates, and improve maternal satisfaction with the birth experience."
        },
        {
            question: "Why are doulas important in Rwanda?",
            answer:
                "Doulas can fill gaps in maternal care, especially in rural and underserved areas, complementing medical professionals and enhancing maternal healthcare quality."
        },
        {
            question: "What kind of support do doulas provide?",
            answer:
                "Doulas provide continuous emotional, physical, and informational support, including pain management techniques, breastfeeding support, and postpartum care guidance."
        },
        {
            question: "Can doulas reduce medical interventions?",
            answer:
                "Yes, studies have shown that doulas help lower the rates of medical procedures like epidurals, cesarean sections, and assisted births by providing continuous support."
        },
        {
            question: "How do doulas help in postpartum recovery?",
            answer:
                "Doulas assist with emotional support, breastfeeding guidance, and newborn care tips, helping mothers transition smoothly into parenthood."
        },
        {
            question: "Are doulas only for childbirth?",
            answer:
                "No, doulas also provide prenatal education, postpartum care, breastfeeding support, and can assist with emotional and mental well-being."
        },
        {
            question: "How can I access doula services in Rwanda?",
            answer:
                "Doula services can be accessed through community health programs, maternity hospitals, and organizations promoting maternal health care."
        }
    ];

    return (
        <div className={`relative flex flex-col items-center min-h-screen p-6 `}>
            <div className="mt-10"></div>

            <div className="w-full flex justify-end md:px-32">
                <Image alt="Dots" src={images.faq} width={150} height={150} />
            </div>
            <div className="w-full flex flex-col items-center">
                <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-6 text-left">
                    Frequently Asked Questions
                </h2>
                <div className="md:w-[80%] max-sm:w-full">
                    <Accordion
                        fullWidth
                        selectionMode="multiple"
                    >
                        {faqs.map((faq:any,index) => (
                            <AccordionItem
                                key={index}
                                aria-label={`Accordion ${faq.key}`}
                                title={<span className="text-gray-600 text-xl font-semibold">{`${index+1}. ${faq.question}`}</span>}
                                className="bg-opacity-20 text-gray-600"
                                indicator={<ChevronRight className="bg-gray-600 rounded-full" color="white" />}
                            >
                                {faq.answer}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
