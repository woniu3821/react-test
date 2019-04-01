import React from "react";
import Subject from "./Subject";
import Paragraph from "./Paragraph";
const Page = () => (
  <div>
    <Subject>这是标题</Subject>
    <Paragraph value={666}>这是正文</Paragraph>
  </div>
);

export default Page;
