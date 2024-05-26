'use client'

import MenuCard from "./components/Menu-Card";
import { Wrapper, Menu1, Menu2 } from "./styled-page"
import * as Icons from 'react-icons/fa6'
import pages from "./helpers/pages";

const Page = () => {
  return (
    <Wrapper>
      <Menu1>
        <MenuCard key={1} PageComponent={pages[0]} />
      </Menu1>
      <Menu2>
        <MenuCard key={2} PageComponent={pages[1]} />
        <MenuCard key={3} PageComponent={pages[2]} />
      </Menu2>
      <div className="3"></div>
    </Wrapper>
  )
};

export default Page;