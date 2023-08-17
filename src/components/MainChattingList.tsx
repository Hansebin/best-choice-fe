import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import ChatUserBadge from "./common/ChatUserBadge";
import EnterChatRoom from "./modal/EnterChatRoom";
import { Post } from "../mocks/mockDatas/activeChatListData";

const MainChattingList = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedChatData, setSelectedChatData] = useState<Post | null>(null);

  const {
    isLoading,
    data: chatData,
    isError,
  } = useFetchData("/activeChatListData", ["chatData"]);

  const openModal = (data: Post) => {
    setModalOpen(true);
    setSelectedChatData(data);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedChatData(null);
  };

  if (isError) {
    console.log("데이터 불러오기 실패");
  }

  return (
    <>
      <div
        data-scroll={true}
        className="grid sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-6 main_chat"
      >
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {chatData.slice(0, 4).map((data: Post) => (
              <div
                key={data.postId}
                onClick={() => openModal(data)}
                className="flex flex-col border border-blue border-2 rounded-xl bg-white w-full h-[180px] shrink-0 p-2.5 cursor-pointer"
              >
                <div className="flex justify-end mb-2">
                  <ChatUserBadge ChatUserCount={data.liveChatUserCount} />
                </div>
                <p className="text-lg text-center font-semibold p-4">
                  {data.title}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      {modalOpen ? (
        <EnterChatRoom data={selectedChatData} closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default MainChattingList;
