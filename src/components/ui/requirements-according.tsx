import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RequirementsAccording = () => {
  return (
    <Accordion className="pt-10 flex justify-start" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-colorBlack italic font-semibold lg:text-lg text-sm">
          Subscription Requirements
        </AccordionTrigger>
        <AccordionContent>
          <h4 className="text-colorBlack italic font-normal lg:text-lg text-xs">
            You should not subscribe to this newsletter if
          </h4>
          <ul className="list-disc font-medium space-y-4 pt-4 text-xs">
            <li>
              - Reading a 2 minutes piece is too much for you. Maybe thoose 4
              Tik Tok videos take the same time and the dopamine is much easier.
              As they all say,{" "}
              <span className="text-colorOrange font-semibold">
                Time is money.
              </span>
            </li>
            <li>
              - You think is not worth it to receive one more{" "}
              <span>annoying</span> email everyday. If you've already subscribe
              and share this opinion, I really encourage you to unsubscribe but
              remember, there's probably more to win than to loose.{" "}
              <span className="text-colorOrange font-semibold">
                Your choices determine you're destiny.
              </span>
            </li>
            <li>
              - Critical thinking, new ideas and overall self-improvement are
              not interesting to you.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RequirementsAccording;
