import { Card, CardContent } from "@/components/ui/card";

type PostCardProps = {
  title: string;
  href: string;
};

const PostCard = (props: PostCardProps) => {
  return (
    <Card className="w-full border-2 border-colorBlack bg-colorLightGrey">
      <a href={props.href} target="_blank">
        <CardContent>
          <h5 className="text-colorBlack text-center text-sm font-normal">
            {props.title}
          </h5>
        </CardContent>
      </a>
    </Card>
  );
};

export default PostCard;
