import '../../styles/sections/landingpage/SideBar.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='nav-list'>
        <li className='nav-list__item'><a href='# '>Home</a></li>
        <li className='nav-list__item'><a href='# '>Services</a></li>
        <li className='nav-list__item'><a href='# '>News</a></li>
        <li className='nav-list__item'><a href='# '>Blog</a></li>
        <li className='nav-list__item'><a href='# '>Contact</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
