webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BasicCard.tsx":
/*!**********************************!*\
  !*** ./components/BasicCard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/pendle/components/BasicCard.tsx";


/** @jsx jsx */



var basicCardRootStyles = function basicCardRootStyles(color, darkText, noShadow) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])({
      backgroundColor: color ? color : "#fff",
      color: darkText ? "white" : "black",
      padding: 32,
      borderRadius: 6,
      boxShadow: noShadow ? "none" : "0 4px 8px #666",
      textAlign: "center",
      transition: "box-shadow 0.10s",
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      alignSelf: "center",
      height: "100%",
      maxHeight: 500,
      '&:hover': {
        boxShadow: noShadow ? "none" : "0 8px 16px #666"
      }
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlEiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wZW5kbGUvY29tcG9uZW50cy9CYXNpY0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQmFzaWNDYXJkUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nXG5cdGNhcmREZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcblx0aW1hZ2VPblRvcD86IGJvb2xlYW47XG5cdHN0cmljdFBhZGRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKFxuXHRjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkLCBcblx0ZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIFxuXHRub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZFxuXHQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcj8gY29sb3I6IFwiI2ZmZlwiLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IChzdHJpY3RQYWRkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7IFxuXHRyZXR1cm4gY3NzKHtcblx0XHRwYWRkaW5nTGVmdDogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cGFkZGluZ1JpZ2h0OiBzdHJpY3RQYWRkaW5nPyA4OiAyNCxcblx0XHRwYWRkaW5nQm90dG9tOiBzdHJpY3RQYWRkaW5nPyA4OiAyNCxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdH0pXG59XG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdGJvcmRlclJhZGl1czogNCxcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMocHJvcHMuc3RyaWN0UGFkZGluZykgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2UgJiYgIXByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMocHJvcHMuc3RyaWN0UGFkZGluZykgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */")
  );
};

var basicCardImageContainerStyles = function basicCardImageContainerStyles(strictPadding) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])({
      paddingLeft: strictPadding ? 8 : 24,
      paddingRight: strictPadding ? 8 : 24,
      paddingBottom: strictPadding ? 8 : 24,
      position: "relative"
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1EiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wZW5kbGUvY29tcG9uZW50cy9CYXNpY0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQmFzaWNDYXJkUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nXG5cdGNhcmREZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcblx0aW1hZ2VPblRvcD86IGJvb2xlYW47XG5cdHN0cmljdFBhZGRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKFxuXHRjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkLCBcblx0ZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIFxuXHRub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZFxuXHQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcj8gY29sb3I6IFwiI2ZmZlwiLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IChzdHJpY3RQYWRkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7IFxuXHRyZXR1cm4gY3NzKHtcblx0XHRwYWRkaW5nTGVmdDogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cGFkZGluZ1JpZ2h0OiBzdHJpY3RQYWRkaW5nPyA4OiAyNCxcblx0XHRwYWRkaW5nQm90dG9tOiBzdHJpY3RQYWRkaW5nPyA4OiAyNCxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdH0pXG59XG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdGJvcmRlclJhZGl1czogNCxcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMocHJvcHMuc3RyaWN0UGFkZGluZykgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2UgJiYgIXByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMocHJvcHMuc3RyaWN0UGFkZGluZykgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */")
  );
};

var basicCardImageStyles =  false ? undefined : {
  name: "cu74z1-basicCardImageStyles",
  styles: "width:100%;height:auto;max-height:250px;margin-bottom:8px;align-self:center;border-radius:4px;label:basicCardImageStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xuXHRzdHJpY3RQYWRkaW5nPzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChcblx0Y29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCwgXG5cdGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBcblx0bm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWRcblx0KSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3I/IGNvbG9yOiBcIiNmZmZcIixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSAoc3RyaWN0UGFkZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4geyBcblx0cmV0dXJuIGNzcyh7XG5cdFx0cGFkZGluZ0xlZnQ6IHN0cmljdFBhZGRpbmc/IDg6IDI0LFxuXHRcdHBhZGRpbmdSaWdodDogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cGFkZGluZ0JvdHRvbTogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZVN0eWxlcyA9IGNzcyh7XG5cdHdpZHRoOiBcIjEwMCVcIixcblx0aGVpZ2h0OiBcImF1dG9cIixcblx0bWF4SGVpZ2h0OiAyNTAsXG5cdG1hcmdpbkJvdHRvbTogOCxcblx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRib3JkZXJSYWRpdXM6IDQsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pbWFnZSAmJiBwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmICFwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};
var basicCardTitleStyles =  false ? undefined : {
  name: "dg91ay-basicCardTitleStyles",
  styles: "font-weight:700;font-size:1.75em;margin-bottom:0;margin-top:0;flex-grow:1;label:basicCardTitleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRTZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xuXHRzdHJpY3RQYWRkaW5nPzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChcblx0Y29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCwgXG5cdGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBcblx0bm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWRcblx0KSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3I/IGNvbG9yOiBcIiNmZmZcIixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSAoc3RyaWN0UGFkZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4geyBcblx0cmV0dXJuIGNzcyh7XG5cdFx0cGFkZGluZ0xlZnQ6IHN0cmljdFBhZGRpbmc/IDg6IDI0LFxuXHRcdHBhZGRpbmdSaWdodDogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cGFkZGluZ0JvdHRvbTogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZVN0eWxlcyA9IGNzcyh7XG5cdHdpZHRoOiBcIjEwMCVcIixcblx0aGVpZ2h0OiBcImF1dG9cIixcblx0bWF4SGVpZ2h0OiAyNTAsXG5cdG1hcmdpbkJvdHRvbTogOCxcblx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRib3JkZXJSYWRpdXM6IDQsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pbWFnZSAmJiBwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmICFwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};
var basicCardDescriptionStyles =  false ? undefined : {
  name: "u2v68c-basicCardDescriptionStyles",
  styles: "margin-top:4px;text-align:left;label:basicCardDescriptionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RW1DIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcGVuZGxlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xuXHRzdHJpY3RQYWRkaW5nPzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChcblx0Y29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCwgXG5cdGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBcblx0bm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWRcblx0KSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3I/IGNvbG9yOiBcIiNmZmZcIixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSAoc3RyaWN0UGFkZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4geyBcblx0cmV0dXJuIGNzcyh7XG5cdFx0cGFkZGluZ0xlZnQ6IHN0cmljdFBhZGRpbmc/IDg6IDI0LFxuXHRcdHBhZGRpbmdSaWdodDogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cGFkZGluZ0JvdHRvbTogc3RyaWN0UGFkZGluZz8gODogMjQsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZVN0eWxlcyA9IGNzcyh7XG5cdHdpZHRoOiBcIjEwMCVcIixcblx0aGVpZ2h0OiBcImF1dG9cIixcblx0bWF4SGVpZ2h0OiAyNTAsXG5cdG1hcmdpbkJvdHRvbTogOCxcblx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRib3JkZXJSYWRpdXM6IDQsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pbWFnZSAmJiBwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmICFwcm9wcy5pbWFnZU9uVG9wPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzKHByb3BzLnN0cmljdFBhZGRpbmcpIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};

var BasicCard = function BasicCard(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: "100%",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    style: {
      textDecoration: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    id: "pa-basic-card",
    css: basicCardRootStyles(props.color ? props.color : "#fff", props.darkText, props.noShadow),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, props.image && props.imageOnTop ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles(props.strictPadding),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardTitleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, props.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardDescriptionStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, props.cardDescription)), props.image && !props.imageOnTop ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles(props.strictPadding),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicCard);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontpageHero */ "./components/FrontpageHero.tsx");
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/commonStyles */ "./utils/commonStyles.tsx");
/* harmony import */ var _assets_hero_bg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/hero_bg.png */ "./assets/hero_bg.png");
/* harmony import */ var _assets_hero_bg_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_bg_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/marquiskurt/Developer/pendle/pages/index.tsx";





/** @jsx jsx */




var IndexPage = function IndexPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Your visual novel. Now with superpowers.",
    subtitle: "Ready to add extra functionality to your visual novels? Want to extend the capabilities of Ren'Py with things like notifications, windows, and applets? Try the open-source framework that gives you angelic powers over your Ren'Py project and start integrating AliceOS into your project today.",
    backgroundImageLocation: _assets_hero_bg_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    callToActionText: "Learn more",
    callToActionLink: "/features/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageGridContainer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Characters from the community to fall in love with.",
    cardDescription: "Forgotten brings new characters that you already know and love to the table. The venerable Alice Angel from Bency and the Ink Machine and Sayonika from the Sayonika team join forces to help solve the mystery.",
    color: "#fafafa",
    noShadow: true,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Anticipate the next release. Continue the story.",
    cardDescription: "Forgotten updates are released on a chapter-by-chapter basis, letting players feel the experience and keep playing with every new update. And, since each release improves on previous chapters, players that want to start over will get to see new improvements.",
    color: "#fafafa",
    noShadow: true,
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.22feb21b347fb47b0fd5.hot-update.js.map