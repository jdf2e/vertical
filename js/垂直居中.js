1:height  line-height
2:inline-block  vertical-align
3:padding
4:box::before(人才库使用，博客园有);
5:flex flex-direction(博客园有)
6:弹窗样式：top: 50%;
    left: 50%;
    margin-top: -($h / 2);
    margin-left: -($w /2);
7：使用的transform：translate（-50％，-50％）; 使字体模糊，解决方法：http://www.it1352.com/565974.html
#div {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
增加：
{
	-webkit-font-smoothing: subpixel-antialiased;
	-webkit-transform: translateZ(0) scale(1.0, 1.0);
}