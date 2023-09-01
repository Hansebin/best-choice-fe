import { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import LoadPostCard from "../components/skeletonUI/LoadPostCard";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "../components/common/ErrorMessage";

const sortNames = [
  { name: "최신순", sort: "LATEST" },
  { name: "추천순", sort: "LIKES" },
  { name: "참여자순", sort: "HOT" },
];

const PostListPage = (): JSX.Element => {
  const [postSort, setPostSort] = useState<string>("LATEST");

  const PostCardList = lazy(
    () => import("../components/contents/PostCardList")
  );

  return (
    <>
      <>
        <h1 className="text-2xl font-semibold mb-8">투표글</h1>
        <div className="flex justify-between mb-7">
          <ul className="flex gap-4">
            {sortNames.map((sortName) => (
              <li
                key={sortName.sort}
                className={`cursor-pointer ${
                  sortName.sort === postSort
                    ? "text-blue-dark font-semibold"
                    : ""
                }`}
                onClick={() => setPostSort(sortName.sort)}
              >
                {sortName.name}
              </li>
            ))}
          </ul>
          <Link to="/create" className="font-bold">
            글쓰기
          </Link>
        </div>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          <Suspense fallback={<LoadPostCard limit={10} />}>
            <PostCardList limit={PostCardList.length} sort={postSort} />
          </Suspense>
        </ErrorBoundary>
      </>
      <ScrollTopBtn />
    </>
  );
};

export default PostListPage;
