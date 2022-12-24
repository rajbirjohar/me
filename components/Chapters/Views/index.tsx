import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const Views = (props: { slug: string }) => {
  const { data } = useSWR(`/api/views/${props.slug}`, fetcher);

  return <>{data?.data ? `${data.data} views` : `–––`}</>;
};

export default Views;
