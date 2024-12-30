<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="header-top">
    <div
      class="header-icon"
      style="display: flex; justify-content: space-between; width: 100%; height: 80px"
    >
      <div
        style="margin: 10px 50px 10px 50px; display: flex; justify-content: space-between"
        class="header-logo"
      >
        <a data-v-51044509="" href="javascript;"
          ><img
            data-v-51044509=""
            src="@/assets/logo.jpg"
            height="58"
            width="58"
            alt="彩旋印刷"
            title="首页"
        /></a>
      </div>
      <div style="padding-top: 10px; width: 605px">
        <div style="float: right">
          <!-- <span class="span-pos"
            >客服电话:<span data-v-68eba7f3="" class="number-font">13661900686</span></span
          > -->
        </div>
        <div style="float: right; margin-left: 10px">
          <a href="https://wpa1.qq.com/YM7CgmoF?_type=wpa&amp;qidian=true" target="_blank"
            ><span style="margin-right: 10px"
              ><svg
                aria-hidden="true"
                class="svg-icon"
                title="QQ咨询"
                style="width: 1.5em; height: 1.5em"
              >
                <use xlink:href="#icon-qqindex" fill=""></use></svg></span
          ></a>
        </div>
        <div style="float: right">
          <svg
            aria-hidden="true"
            class="svg-icon el-tooltip__trigger"
            title="微信扫码咨询"
            style="width: 1.5em; height: 1.5em"
          >
            <use xlink:href="#icon-weixin" fill=""></use>
          </svg>
        </div>
        <div style="clear: both"></div>
      </div>
      <div style="height: 80px; display: flex; justify-content: space-between; margin-top: 20px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品</el-menu-item>
          <el-menu-item index="3">服务</el-menu-item>
          <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
  <div style="margin-top: 5px; margin-left: 10px; border: 1px 0px 1px 0px; border-color: aliceblue">
    <el-row class="tac">
      <el-col :span="4">
        <div class="menu-wrap">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-sub-menu index="1">
              <template #title>
                <el-icon></el-icon>
                <span
                  style="margin-left: -30px; font-weight: 500; font-size: 16px; font-weight: bold"
                  >运输票/门票/水票/代金券类</span
                >
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">运输票/门票/水票/代金券</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon></el-icon>
                <span
                  style="margin-left: -30px; font-weight: 500; font-size: 16px; font-weight: bold"
                  >联单/稿纸/牛皮纸/喷墨类</span
                >
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">无碳联单（黑白）</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-2">喷墨彩色联单（可变数据） </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-3">胶印彩色联单</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-4">红头/牛皮纸脚垫（默认切单页）</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-5">双胶纸/稿纸/便签本</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-6">喷墨单张（培训资料、试卷）</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-7">电梯保养本专区</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-8">机打联单</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="order-wrap">
          <div>
            <el-card>
              <template #header>
                <div class="card-header">
                  <span style="margin-right: 20px; min-width: 115px"
                    >无碳联单（黑白）--在线报价<span
                      style="font-size: 12px; color: rgb(144, 147, 153)"
                      >(带<span class="text-star">*</span>号的参数为此产品必选项)</span
                    ></span
                  >

                  <div style="padding-top: 10px; width: 605px">
                    <div style="float: right">
                      <span class="span-pos"
                        >客服电话:<span class="number-font">13661900686</span></span
                      >
                    </div>
                    <div style="float: right; margin-left: 10px">
                      <a
                        href="https://wpa1.qq.com/YM7CgmoF?_type=wpa&amp;qidian=true"
                        target="_blank"
                        ><span style="margin-right: 10px"
                          ><svg
                            aria-hidden="true"
                            class="svg-icon"
                            title="QQ咨询"
                            style="width: 1.5em; height: 1.5em"
                          >
                            <use xlink:href="#icon-qqindex" fill=""></use></svg></span
                      ></a>
                    </div>
                    <div style="float: right">
                      <el-tooltip
                        content="<span>The content can be <strong>HTML</strong></span>"
                        raw-content
                      >
                        <template #content>
                          <img
                            src="@/assets/wechat_scan.jpg"
                            alt="图片说明"
                            style="width: 150px; height: 150px"
                          />
                        </template>
                        <img src="@/assets/wechat.svg" height="38" width="38" />
                      </el-tooltip>
                    </div>
                    <div style="clear: both"></div>
                  </div>
                </div>
              </template>
              <div class="obj" style="min-width: 960px; overflow-x: auto">
                <div class="obj-tit">必选项<!----><!----><!----></div>
                <div class="page">
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>材料</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <div class="order-con">
                          <div style="position: relative; display: inline-block">
                            <button
                              aria-disabled="false"
                              type="button"
                              class="el-button el-button--primary el-button--default"
                            >
                              <!--v-if--><span class=""
                                >木浆纸
                                <span class="end-close" style="display: none"
                                  ><svg viewBox="0 0 1024 1024" width="1.2em" height="1.2em">
                                    <path
                                      fill="currentColor"
                                      d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                                    ></path></svg></span
                              ></span></button
                            ><!----><!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>尺寸</span><span>：</span>
                        </div>
                      </div>

                      <div class="el-col el-col-21">
                        <div class="mb7px inline-block" style="display: flex">
                          <div class="flex flex-wrap gap-4 items-center">
                            <el-select
                              placeholder="选择"
                              size="default"
                              style="width: 240px"
                              v-model="selectedValue"
                              @change="handleSelectChange"
                            >
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </div>
                          <div class="ml7px inline-block align-middle">
                            <label class="el-checkbox el-checkbox--large"
                              ><span class="el-checkbox__input"
                                ><input
                                  class="el-checkbox__original"
                                  type="checkbox"
                                  value="自定义" /><span class="el-checkbox__inner"></span></span
                              ><span class="el-checkbox__label">自定义</span></label
                            >
                          </div>
                          <div style="max-width: 50px; display: inline-block; position: relative">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>联数</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <div>
                          <el-radio-group v-model="radio2" size="large">
                            <el-radio-button label="二联" value="2" />
                            <el-radio-button label="三联" value="3" />
                            <el-radio-button label="四联" value="4" />
                            <el-radio-button label="五联" value="5" />
                          </el-radio-group>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>纸序</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <div class="mb7px inline-block">
                          <div class="el-select el-select--default" style="width: 240px">
                            <div
                              class="el-select__wrapper is-filterable el-tooltip__trigger el-tooltip__trigger"
                              tabindex="-1"
                            >
                              <!--v-if-->
                              <div class="el-select__selection">
                                <!--v-if-->
                                <div class="el-select__selected-item el-select__input-wrapper">
                                  <input
                                    type="text"
                                    class="el-select__input is-default"
                                    autocomplete="off"
                                    role="combobox"
                                    spellcheck="false"
                                    aria-activedescendant=""
                                    aria-controls="el-id-8020-34"
                                    aria-expanded="false"
                                    aria-autocomplete="none"
                                    aria-haspopup="listbox"
                                    id="el-id-8020-56"
                                    style="width: 11px"
                                  /><span
                                    aria-hidden="true"
                                    class="el-select__input-calculator"
                                  ></span>
                                </div>
                                <div class="el-select__selected-item el-select__placeholder">
                                  <span>{{
                                    radio2 == '2'
                                      ? '白红'
                                      : radio2 == '3'
                                      ? '白红黄'
                                      : radio2 == '4'
                                      ? '白红黄蓝'
                                      : '白红黄蓝绿'
                                  }}</span>
                                </div>
                              </div>
                              <div class="el-select__suffix">
                                <i class="el-icon el-select__caret el-select__icon"
                                  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path
                                      fill="currentColor"
                                      d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                    ></path></svg></i
                                ><!--v-if--><!--v-if-->
                              </div>
                            </div>
                          </div>
                          <div class="formatInput formatInput" style="display: none">
                            <div style="display: inline-block">
                              自定义纸序:&nbsp;
                              <div class="el-input el-input--small" style="width: 150px !important">
                                <!-- input --><!-- prepend slot --><!--v-if-->
                                <div class="el-input__wrapper" tabindex="-1">
                                  <!-- prefix slot --><!--v-if--><input
                                    class="el-input__inner"
                                    modelmodifiers="[object Object]"
                                    type="text"
                                    autocomplete="off"
                                    tabindex="0"
                                    id="el-id-8020-57"
                                  /><!-- suffix slot --><!--v-if-->
                                </div>
                                <!-- append slot --><!--v-if-->
                              </div>
                              <!----><!----><!----><!----><!---->
                            </div>
                          </div>
                          <div class="ml7px inline-block align-middle">
                            <label class="el-checkbox el-checkbox--large"
                              ><span class="el-checkbox__input"
                                ><input
                                  class="el-checkbox__original"
                                  type="checkbox"
                                  value="自定义" /><span class="el-checkbox__inner"></span></span
                              ><span class="el-checkbox__label">自定义</span></label
                            >
                          </div>
                          <div style="max-width: 50px; display: inline-block; position: relative">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>每本张数</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <div class="mb7px inline-block">
                          <div class="el-select el-select--default" style="width: 240px">
                            <div
                              class="el-select__wrapper is-filterable el-tooltip__trigger el-tooltip__trigger"
                              tabindex="-1"
                            >
                              <!--v-if-->
                              <div class="el-select__selection">
                                <!--v-if-->
                                <div class="el-select__selected-item el-select__input-wrapper">
                                  <input
                                    type="text"
                                    class="el-select__input is-default"
                                    autocomplete="off"
                                    role="combobox"
                                    spellcheck="false"
                                    aria-activedescendant=""
                                    aria-controls="el-id-8020-44"
                                    aria-expanded="false"
                                    aria-autocomplete="none"
                                    aria-haspopup="listbox"
                                    id="el-id-8020-58"
                                    style="width: 11px"
                                  /><span
                                    aria-hidden="true"
                                    class="el-select__input-calculator"
                                  ></span>
                                </div>
                                <div class="el-select__selected-item el-select__placeholder">
                                  <span>100</span>
                                </div>
                              </div>
                              <div class="el-select__suffix">
                                <i class="el-icon el-select__caret el-select__icon"
                                  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path
                                      fill="currentColor"
                                      d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                    ></path></svg></i
                                ><!--v-if--><!--v-if-->
                              </div>
                            </div>
                          </div>
                          <div class="formatInput formatInput" style="display: none">
                            <div style="display: inline-block">
                              &nbsp;
                              <div style="display: inline-block">
                                <div
                                  class="el-input-number el-input-number--small is-without-controls"
                                  style="width: 80px !important"
                                >
                                  <!--v-if--><!--v-if-->
                                  <div class="el-input el-input--small">
                                    <!-- input --><!-- prepend slot --><!--v-if-->
                                    <div class="el-input__wrapper" tabindex="-1">
                                      <!-- prefix slot --><!--v-if--><input
                                        class="el-input__inner"
                                        step="1"
                                        max="Infinity"
                                        min="-Infinity"
                                        type="number"
                                        autocomplete="off"
                                        tabindex="0"
                                        role="spinbutton"
                                        aria-valuenow=""
                                        aria-disabled="false"
                                        id="el-id-8020-59"
                                      /><!-- suffix slot --><!--v-if-->
                                    </div>
                                    <!-- append slot --><!--v-if-->
                                  </div>
                                </div>
                                <!---->
                              </div>
                              <span>&nbsp;组&nbsp;</span>
                              <div
                                class="el-input-number el-input-number--small is-without-controls"
                                style="width: 80px !important"
                              >
                                <!--v-if--><!--v-if-->
                                <div class="el-input el-input--small">
                                  <!-- input --><!-- prepend slot --><!--v-if-->
                                  <div class="el-input__wrapper" tabindex="-1">
                                    <!-- prefix slot --><!--v-if--><input
                                      class="el-input__inner"
                                      step="1"
                                      max="Infinity"
                                      min="-Infinity"
                                      type="number"
                                      autocomplete="off"
                                      tabindex="0"
                                      role="spinbutton"
                                      aria-valuenow=""
                                      aria-disabled="false"
                                      id="el-id-8020-60"
                                    /><!-- suffix slot --><!--v-if-->
                                  </div>
                                  <!-- append slot --><!--v-if-->
                                </div>
                              </div>
                              <span>&nbsp;页每本&nbsp;</span
                              ><!----><!---->
                            </div>
                          </div>
                          <div class="ml7px inline-block align-middle">
                            <label class="el-checkbox el-checkbox--large"
                              ><span class="el-checkbox__input"
                                ><input
                                  class="el-checkbox__original"
                                  type="checkbox"
                                  value="自定义" /><span class="el-checkbox__inner"></span></span
                              ><span class="el-checkbox__label">自定义</span></label
                            >
                          </div>
                          <div style="max-width: 50px; display: inline-block; position: relative">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>印刷要求</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <div>
                          <el-radio-group v-model="radio1">
                            <el-radio style="margin-bottom: 5px" value="1" size="default" border
                              >单面单黑边联相同</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="2" size="default" border
                              >单面单黑边联不同</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="3" size="default" border
                              >单面专色边联相同</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="4" size="default" border
                              >每联印色不同</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="5" size="default" border
                              >双面单黑印</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="6" size="default" border
                              >正面双色+任意一联背面单黑</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="7" size="default" border
                              >正面单黑边联相同+任意一联背面单黑</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="8" size="default" border
                              >正面单黑边联不同+任意一联背面单黑</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="9" size="default" border
                              >正面双色（边联字相同）</el-radio
                            >
                            <el-radio style="margin-bottom: 5px" value="10" size="default" border
                              >正面双色（边联字不同）</el-radio
                            >
                          </el-radio-group>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>刷胶方式</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <el-radio-group v-model="radio3">
                          <el-radio style="margin-bottom: 5px" value="1" size="default" border
                            >左边刷胶</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="2" size="default" border
                            >上边刷胶</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername">
                          <span class="text-star">*</span><span>封皮</span><span>：</span>
                        </div>
                      </div>
                      <div class="el-col el-col-21">
                        <el-radio-group v-model="radio4">
                          <el-radio style="margin-bottom: 5px" value="1" size="default" border
                            >无皮</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="2" size="default" border
                            >80g空白封皮</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="4" size="default" border
                            >100g空白封皮</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="5" size="default" border
                            >100g牛皮印字</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="6" size="default" border
                            >150g绿皮纹印字</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="7" size="default" border
                            >150g蓝皮纹印字</el-radio
                          >
                          <el-radio style="margin-bottom: 5px" value="8" size="default" border
                            >157g铜版印字</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                  <div class="parameter-con">
                    <div class="el-row">
                      <div class="el-col el-col-3" style="max-width: 120px !important">
                        <div class="parametername"><!----><span>其它工艺</span><span>：</span></div>
                      </div>
                      <div class="el-col el-col-21">
                        <div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="打码" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">打码</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <div>
                                <div
                                  class="el-select el-select--default"
                                  title="个数"
                                  style="width: 140px"
                                >
                                  <div
                                    class="el-select__wrapper el-tooltip__trigger el-tooltip__trigger"
                                    tabindex="-1"
                                  >
                                    <!--v-if-->
                                    <div class="el-select__selection">
                                      <!--v-if-->
                                      <div
                                        class="el-select__selected-item el-select__input-wrapper is-hidden"
                                      >
                                        <input
                                          type="text"
                                          class="el-select__input is-default"
                                          autocomplete="off"
                                          role="combobox"
                                          readonly="true"
                                          spellcheck="false"
                                          aria-activedescendant=""
                                          aria-controls="el-id-8020-48"
                                          aria-expanded="false"
                                          aria-autocomplete="none"
                                          aria-haspopup="listbox"
                                          id="el-id-8020-61"
                                          style="width: 11px"
                                        /><!--v-if-->
                                      </div>
                                      <div class="el-select__selected-item el-select__placeholder">
                                        <span>1</span>
                                      </div>
                                    </div>
                                    <div class="el-select__suffix">
                                      <i class="el-icon el-select__caret el-select__icon"
                                        ><svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 1024 1024"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                          ></path></svg></i
                                      ><!--v-if--><!--v-if-->
                                    </div>
                                  </div>
                                </div>
                                <!----><!----><!----><!---->
                              </div>
                            </div>
                            <div class="dep_box" style="display: none">
                              <div>
                                <!---->
                                <div class="el-input el-input--default" style="width: 130px">
                                  <!-- input --><!-- prepend slot --><!--v-if-->
                                  <div class="el-input__wrapper" tabindex="-1">
                                    <!-- prefix slot --><!--v-if--><input
                                      class="el-input__inner"
                                      title="打码起始号"
                                      type="text"
                                      autocomplete="off"
                                      tabindex="0"
                                      placeholder="打码起始号"
                                      id="el-id-8020-62"
                                    /><!-- suffix slot --><!--v-if-->
                                  </div>
                                  <!-- append slot --><!--v-if-->
                                </div>
                                <!----><!---->
                              </div>
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-disabled is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input is-disabled"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="加内钉" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">加内钉</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-disabled is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input is-disabled"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="加垫板" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">加垫板</span></label
                              >
                              <div class="btn-example" title="参数示例图">
                                <svg
                                  aria-hidden="true"
                                  class="svg-icon"
                                  style="width: 32px; height: 16px"
                                >
                                  <use xlink:href="#icon-shili" fill=""></use>
                                </svg>
                              </div>
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="压点线" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">压点线</span></label
                              >
                              <div class="btn-example" title="参数示例图">
                                <svg
                                  aria-hidden="true"
                                  class="svg-icon"
                                  style="width: 32px; height: 16px"
                                >
                                  <use xlink:href="#icon-shili" fill=""></use>
                                </svg>
                              </div>
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="装纸箱" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">装纸箱</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-disabled is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input is-disabled"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="热熔胶订" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                                ><span class="el-checkbox__label">热熔胶订</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="做稿件" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">做稿件</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                          <div class="order-con">
                            <div style="position: relative; display: inline-block">
                              <label
                                class="el-checkbox el-checkbox--default is-bordered"
                                style="vertical-align: middle"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    value="送垫板" /><span class="el-checkbox__inner"></span></span
                                ><span class="el-checkbox__label">送垫板</span></label
                              ><!---->
                            </div>
                            <div class="dep_box" style="display: none">
                              <!---->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <template #footer>
                <div class="price-visible">
                  <div class="el-row">
                    <div class="el-col el-col-3" style="max-width: 120px !important">
                      <div class="parametername">
                        <div class="">
                          <span class="text-star">* </span> 数量 <span>(本)</span><span>：</span>
                        </div>
                        <!----><!---->
                      </div>
                    </div>
                    <div class="el-col el-col-21">
                      <div class="qty-item">
                        <span>5</span><b>￥{{ calculatePrice(5) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>10</span><b>￥{{ calculatePrice(6) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>20</span><b>￥{{ calculatePrice(20) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>50</span><b>￥{{ calculatePrice(50) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>52</span><b>￥{{ calculatePrice(52) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>100</span><b>￥{{ calculatePrice(100) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>102</span><b>￥{{ calculatePrice(102) }}</b
                        ><!---->
                      </div>
                      <div class="qty-item">
                        <span>104</span><b>￥{{ calculatePrice(104) }}</b
                        ><!---->
                      </div>
                      <div class="qty-active qty-item">
                        <span>200</span><b>￥{{ calculatePrice(200) }}</b
                        ><!---->
                      </div>
                      <span style="font-size: 13px; margin-right: 5px">自定义:</span>
                      <div
                        class="el-input-number el-input-number--default is-without-controls"
                        style="width: 85px; margin-right: 7px"
                      >
                        <!--v-if--><!--v-if-->
                        <div class="el-input el-input--default">
                          <!-- input --><!-- prepend slot --><!--v-if-->
                          <div class="el-input__wrapper" tabindex="-1">
                            <!-- prefix slot --><!--v-if--><input
                              class="el-input__inner"
                              step="1"
                              max="9999999"
                              min="1"
                              type="number"
                              autocomplete="off"
                              tabindex="0"
                              placeholder="请输入"
                              role="spinbutton"
                              v-model="quantity"
                              id="el-id-234-78"
                            /><!-- suffix slot --><!--v-if-->
                          </div>
                          <!-- append slot --><!--v-if-->
                        </div>
                      </div>
                      <button
                        aria-disabled="false"
                        type="button"
                        class="el-button el-button--warning el-button--default"
                      >
                        <!--v-if--><span class="">计算价格</span></button
                      ><!---->
                    </div>
                    <div class="el-col el-col-3" style="max-width: 120px !important">
                      <li class="parametername" style="margin-top: 7px">
                        <span>价格</span><span>：</span>
                      </li>
                    </div>
                    <div
                      class="el-col el-col-21"
                      style="margin-top: 7px; font-weight: bold; min-height: 36px"
                    >
                      <span class="price text-price">
                        <span class="money-text">￥{{ calculatePrice(quantity) }}</span></span
                      >
                      元
                      <!----><!----><!----><!----><button
                        aria-disabled="false"
                        type="button"
                        class="el-button el-button--success el-button--default"
                        style="margin-left: 10px"
                      >
                        <!--v-if--><span class="">上传文件</span>
                      </button>
                    </div>
                    <div class="el-col el-col-3" style="max-width: 120px !important">
                      <li class="parametername" style="margin-top: 7px">
                        <span>报价明细</span><span>：</span>
                      </li>
                    </div>
                    <div class="el-col el-col-21" style="margin-top: 7px; min-height: 29px">
                      <div class="memo-class">
                        <span
                          >无碳联单（黑白）-木浆纸-{{
                            size
                          }}-二联-白红-每本张数100-单面单黑边联相同-左边刷胶-无皮-200本-预估重量62.5kg-预估出货日期(2024-12-19)</span
                        ><span>-{{ size }}元</span
                        ><!----><button
                          aria-disabled="false"
                          type="button"
                          class="el-button el-button--primary el-button--small is-link"
                        >
                          <!--v-if--><span class="">复制报价总结</span></button
                        ><button
                          aria-disabled="false"
                          type="button"
                          class="el-button el-button--primary el-button--small is-link"
                        >
                          <!--v-if--><span class="">复制批量下单总结</span>
                        </button>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
              </template>
            </el-card>
          </div>
          <div data-v-28a0d961="" class="qute-fixed" style="top: 388.8px">
            <div
              data-v-28a0d961=""
              class="el-card is-always-shadow quto-card"
              style="min-width: 240px"
            >
              <div class="el-card__header">
                <div data-v-28a0d961="" class="card-header">
                  <span data-v-28a0d961="">报价预览</span>
                </div>
              </div>
              <div class="el-card__body" style="">
                <div data-v-28a0d961="" class="qute-product">
                  <div data-v-28a0d961="" class="qute-title">无碳联单（黑白）</div>
                </div>
                <div data-v-28a0d961="" class="qute-product">
                  <div data-v-28a0d961="">
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">材料：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">木浆纸</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">尺寸：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name"
                          >大16开210X285</span
                        ></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">联数：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">二联</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">纸序：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">白红</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">每本张数：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">100</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">印刷要求：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name"
                          >单面单黑边联相同</span
                        ></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">刷胶方式：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">左边刷胶</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">封皮：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">无皮</span></span
                      >
                    </div>
                    <div data-v-28a0d961="">
                      <span data-v-28a0d961="" class="preview-title">数量：</span
                      ><span data-v-28a0d961=""
                        ><!----><span data-v-28a0d961="" class="preview-name">5本</span></span
                      >
                    </div>
                  </div>
                </div>
                <div data-v-28a0d961="">
                  <span data-v-28a0d961="" class="preview-title">预估出货日期：</span
                  ><span
                    data-v-28a0d961=""
                    class="preview-name money-name"
                    style="color: rgb(64, 158, 255)"
                    >2025-01-01</span
                  >
                </div>
                <div data-v-28a0d961="">
                  <span data-v-28a0d961="" class="preview-title">产品价格：</span
                  ><span data-v-28a0d961="" class="preview-name money-name">69元</span>
                </div>
                <span data-v-28a0d961="" style="color: rgb(96, 98, 102); font-size: 14px"></span
                ><button
                  data-v-28a0d961=""
                  aria-disabled="false"
                  type="button"
                  class="el-button el-button--primary el-button--small is-link"
                >
                  <!--v-if--><span class="">点击复制</span></button
                ><!---->
              </div>
              <!--v-if-->
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'
import './Home.css'

export default {
  components: {
    ElMenu,
    ElMenuItem,
  },
  data() {
    return {
      list: [1, 2, 3],
      radio2: '3',
      radio1: '1',
      radio3: '1',
      radio4: '1',
      quantity: 1,
      options: [
        {
          value: '1',
          label: '大16开210*285',
        },
        {
          value: '2',
          label: '大32开210*140',
          disabled: true,
        },
        {
          value: '3',
          label: '大32开210*145',
        },
        {
          value: '4',
          label: '正16开185*260',
        },
        {
          value: '5',
          label: '正32开130*185',
        },
        {
          value: '6',
          label: '正32开130*190',
        },
        {
          value: '7',
          label: '大48开210*95',
        },
        {
          value: '8',
          label: '正48开180*85',
        },
        {
          value: '9',
          label: '正32开130*190',
        },
        {
          value: '10',
          label: '正32开130*190',
        },
        {
          value: '11',
          label: '正32开130*190',
        },
        {
          value: '12',
          label: '正32开130*190',
        },
        {
          value: '13',
          label: '正32开130*190',
        },
      ],
    }
  },
  setup() {
    const activeIndex = ref('1')
    const size = ref('')
    const handleSelect = (key: unknown) => {
      console.log('选中的菜单项索引:', key)
      // 在这里可以根据索引进行路由跳转等操作
    }
    const selectedValue = ref('')
    const handleSelectChange = () => {
      console.log('选项被选中，选中的值为:', selectedValue.value)
      // 这里可以添加你想要执行的逻辑，比如记录选中时间
      const selectedTime = new Date()
      size.value = selectedValue.value
      console.log('选中时间:', selectedTime)
    }

    // 使用computed创建计算属性price

    return {
      activeIndex,
      handleSelect,
      handleSelectChange,
      selectedValue,
      size,
    }
  },
  methods: {
    calculatePrice(x: number) {
      if (x > 0 && x <= 10) {
        return 69
      } else if (x > 10 && x <= 20) {
        return 41 + 2.8 * x
      } else if (x > 20 && x <= 50) {
        return 49.6 + 2.37 * x
      } else if (x > 50 && x <= 100) {
        return 24 + 2.88 * x
      } else if (x > 100 && x <= 200) {
        return 5 + 3.07 * x
      } else if (x > 200) {
        return 3 * x
      }
    },
  },

  handleOpen(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  },
  handleClose(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  },
}
</script>

