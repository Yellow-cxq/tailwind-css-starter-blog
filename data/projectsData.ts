interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '一个未来的项目',
    description: `君不见，黄河之水天上来，奔流至此不复还`,
    imgSrc: '/static/images/hit.png',
    href: 'https://www.bilibili.com/',
  },
  {
    title: '一个以后的项目',
    description: `金猴奋起千钧棒，玉宇澄清万里埃`,
    imgSrc: '/static/images/yibao.png',
    href: 'https://www.bilibili.com/',
  },
]

export default projectsData
