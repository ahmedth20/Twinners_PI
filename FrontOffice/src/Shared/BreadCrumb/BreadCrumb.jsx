/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  breadCrumbIcon2,
  url,
  breadCrumbLink,
  breadCrumbLink2
}) => {
  return (
    <div className='px-2 lg:px-4 xl:px-[30px] bg-BodyBg-0'>
      <div className="bg-[url('/images/breadcrumb.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center h-[400px] sm:h-[420px] rounded-[30px]">
        <div className='Container text-center'>
          <h1 className='font-AlbertSans font-extrabold text-2xl sm:text-4xl md:text-[55px] text-white uppercase'>
            {breadCrumbTitle}
          </h1>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mt-[22px]'>
            <li>
              <Link to={'/'}>
                <button className='font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 uppercase'>
                 Smart190
                </button>
              </Link>
            </li>
            <li>
              <div className='text-white hidden sm:block'>{breadCrumbIcon}</div>
            </li>
            <li>
              <Link to={url}>
                <button className='font-AlbertSans text-white uppercase'>
                  {breadCrumbLink}
                </button>
              </Link>
            </li>
            <li>
              <div className='text-white hidden sm:block'>{breadCrumbIcon2}</div>
            </li>
            <li>
              <Link to={url}>
                <button className='font-AlbertSans text-white uppercase'>
                  {breadCrumbLink2}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
