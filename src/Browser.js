/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 11:23:25
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-04-30 11:28:58
 * @FilePath: /sennka-libs/src/Browser.js
 * @Description: 浏览器的方法，如激活粘贴图片转base64,让body可以编辑，解文字不能复制
 */

/**
 * 激活粘贴图片转base64
 * @param {*} context
 */
export const activeImage2Base64 = (context = window) => {
  context.addEventListener('paste', event => {
    if (event.clipboardData.files.length > 0) {
      const file = event.clipboardData.files[0];
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', () => {
        console.log(fr.result);
      });
    }
  });
};

/**
 * 激活文字可以编辑
 * @param {*} context
 */
export const activeBodyEditable = (context = document.body) => {
  context.contentEditable = true;
};
