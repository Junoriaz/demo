<transition name='fade'>
	<div>
	<form>
    <div class="publish_box">
        <ul class="publish_ul">
            <li v-for="cartype in cartypeArr">
                <label for="title">{{cartype.name}}</label>
                <input class="Jssel" id="title" type="text" value="" :placeholder="cartype.now" readonly />
            </li>
        </ul>
    </div>

    <div class="publish_box">
        <ul class="publish_ul">
            <li v-for="cartype2 in cartype2Arr">
                <label for="price">{{cartype2.name}}</label>
                <input class="arrow arrow_w" id="price" type="text" value="" :placeholder="cartype2.now" />
            </li>
        </ul>
    </div>

    <div class="fix">
        <!---品牌 车系 车型--->
        <ul id="titleUl" style="display: none;">
            <li>
                <a href="javascript:void(0)">奔驰</a>
                <ul style="display: none;">
                    <li>
                        <a href="javascript:void(0)">C系</a>
                        <ul style="display: none;">
                            <li><a href="javascript:void(0)">c63</a></li>
                            <li><a href="javascript:void(0)">c180</a></li>
                            <li><a href="javascript:void(0)">c200</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0)">E系</a>
                        <ul style="display: none;">
                            <li><a href="javascript:void(0)">E63</a></li>
                            <li><a href="javascript:void(0)">E180</a></li>
                            <li><a href="javascript:void(0)">E200</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0)">宝马</a>
                <ul style="display: none;">
                    <li>
                        <a href="javascript:void(0)">C系</a>
                        <ul style="display: none;">
                            <li><a href="javascript:void(0)">c63</a></li>
                            <li><a href="javascript:void(0)">c180</a></li>
                            <li><a href="javascript:void(0)">c200</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0)">E系</a>
                        <ul style="display: none;">
                            <li><a href="javascript:void(0)">E63</a></li>
                            <li><a href="javascript:void(0)">E180</a></li>
                            <li><a href="javascript:void(0)">E200</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <!---年份--->
        <ul id="yearUl" style="display: none;">
            <li><a href="javascript:void(0)">2015</a></li>
            <li><a href="javascript:void(0)">2014</a></li>
            <li><a href="javascript:void(0)">2013</a></li>
        </ul>
        <!---外色--->
        <ul id="outColorUl" style="display: none;">
            <li><a href="javascript:void(0)">白色</a></li>
            <li><a href="javascript:void(0)">黑色</a></li>
            <li><a href="javascript:void(0)">红色</a></li>
        </ul>

        <!---内色--->
        <ul id="inColorUl" style="display: none;">
            <li><a href="javascript:void(0)">白色</a></li>
            <li><a href="javascript:void(0)">黑色</a></li>
            <li><a href="javascript:void(0)">红色</a></li>
        </ul>
        <!---卖到哪里-->
        <ul id="whereUl" style="display: none;">
            <li><a href="javascript:void(0)">北京</a></li>
            <li><a href="javascript:void(0)">上海</a></li>
            <li><a href="javascript:void(0)">杭州</a></li>
        </ul>
        <!---状态-->
        <ul id="statusUl" style="display: none;">
            <li><a href="javascript:void(0)">全款</a></li>
            <li><a href="javascript:void(0)">贷款</a></li>
        </ul>
    </div>

    <textarea class="buySell_text publish_text" :placeholder="handwrite"></textarea>

   <input class="buySell_btn" type="submit" value="发布" />
</form>
</div>
</transition>