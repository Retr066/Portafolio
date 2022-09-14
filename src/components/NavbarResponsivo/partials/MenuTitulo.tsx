import { CloseOutlined } from '@ant-design/icons';

export const MenuTitulo = ({ toggleMenuResponsive }: { toggleMenuResponsive: () => void }) => {
  return (
    <div className="flex items-center justify-between pl-2.5 mb-5 border-b ">
      <div className="flex items-center p-2 text-base font-normal rounded-lg text-primary dark:text-white ">
        <svg
          className="flex-shrink-0 w-6 h-6 transition duration-75 text-primary dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
        <span className="flex-1 ml-3 text-xl font-bold whitespace-nowrap ">Menú</span>
      </div>

      <button className="bg-primary rounded-full p-1 px-2" onClick={toggleMenuResponsive}>
        <CloseOutlined className="text-lg text-white" />
      </button>
    </div>
  );
};
