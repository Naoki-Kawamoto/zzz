import logo from './logo.svg';
import './App.css';

<!DOCTYPE html>
<html lang="ja">
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
<link rel="stylesheet" type=text/css href="./style_final.css">
<script type="text/javascript" src="style.js"></script>
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
</head>

<div>&nbsp;</div>

<div>
<h2> 健診データフォーム&thinsp; </h2>
  <button type="button" class="camera_button" onclick="onButtonclick2()>
    <i class="fas fa-robot fa-lg"></i><strong>&nbsp;画像読み取り</strong>
  </button>
  <script type="text/javascript" src="getByid2.js"></script>
</div>

<div>&nbsp;</div>

<table class="table-res-form">
<tbody>
  <tr>
    <th>お名前</th>
      <td colspan="2"><input type="text" id=1 name="your-name" placeholder="お名前" value="" aria-required="true" aria-invalid="false"> 様</td>
  </tr>

  <tr>
    <th>お名前（フリガナ）</th>
      <td colspan="2"><input type="text" id=2 name="your-name" placeholder="カナ" value="" aria-required="true" aria-invalid="false"> 様</td>
  </tr>

  <tr>
    <th>年齢</th>
      <td colspan="2"><input type="number" id=3 name="you-age" placeholder="年齢" value=""  max="120" aria-required="true" aria-invalid="false"> 歳</td>
  </tr>
  <tr>
    <th>性別</th>
      <td><label><input type="radio" id=4 name="your-sex" value="男性">男性</label><label><input type="radio" name="your-sex" value="女性">女性</label></td>
  </tr>

  <tr>
    <th>身長</th>
      <td colspan="2"><input type="number" id=5 step="0.1" name="your-height" placeholder="身長" value="" aria-required="true" aria-invalid="false"> cm</td>
  </tr>

  <tr>
    <th>体重</th>
      <td colspan="2"><input type="number" id=6 step="0.01" name="your-weight" placeholder="体重" value="" aria-required="true" aria-invalid="false"> kg</td>
  </tr>

  <tr>
    <th>BMI</th>
      <td colspan="2"><input type="number" id=7 name="BMI" value="" aria-invalid="false" placeholder="BMI"></td>
  </tr>

  <tr>
    <th>腹囲</th>
      <td colspan="2"><input type="number" id=8 name="waist" placeholder="腹囲" step="0.1" value="" aria-required="true" aria-invalid="false"> cm</td>
  </tr>

  <tr>
    <th>心拍数</th>
      <td colspan="2"><input type="number" id=9 name="heart_rate" placeholder="心拍数" step="1" value="" aria-required="true" aria-invalid="false"> 回/1分</td>
  </tr>

  <tr>
    <th>脈拍</th>
      <td colspan="2"><input type="number" id=10 name="pusle" placeholder="脈拍" step="1" value="" aria-required="true" aria-invalid="false"> 回/1分</td>
  </tr>

  <tr>
    <th>呼吸数</th>
      <td colspan="2"><input type="number" id=11 name="respiratory_rate" placeholder="呼吸数" step="1" value="" aria-required="true" aria-invalid="false"> 回/1分</td>
  </tr>

  <tr>
    <th>SPO2</th>
      <td colspan="2"><input type="number" id=12 name="SPO2" placeholder="SPO2" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>血圧</th>
      <td>最高（平均値）<br><input type="number" id=13 name="blood-pressure-max" placeholder="最高血圧（平均値）" value="" aria-required="true" aria-invalid="false"> mmHg</td>
      <td>最低（平均値）<br><input type="number" id=14 name="blood-pressure-min" placeholder="最低血圧（平均値）" value="" aria-required="true" aria-invalid="false"> mmHg</td>
  </tr>
  <tr>
    <th>視力（裸眼）</th>
        <td>裸眼 右<br><input type="number" name="eye-right" placeholder="裸眼 右" step="0.01" value="" max="2" aria-required="true" aria-invalid="false"></td>
        <td>裸眼 左<br><input type="number" name="eye-left" placeholder="裸眼 左" step="0.01" value="" max="2" aria-required="true" aria-invalid="false"></td>
  </tr>

  <tr>
    <th>視力（矯正）</th>
        <td>矯正 右<br><input type="number" name="eye-right2" placeholder="矯正 右" step="0.01" value="" max="2" aria-invalid="false"></td>
        <td>矯正 左<br><input type="number" name="eye-left2" placeholder="矯正 左" step="0.01" value=""  max="2" aria-invalid="false"></td>
  </tr>

  <tr>
    <th>眼底</th>
      <td>眼底KW<br><select name="eye-kw" value="" aria-invalid="false"><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
      <td>眼底H<br><select name="eye-kw" value="" aria-invalid="false"><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
      <td>眼底S<br><select name="eye-kw" value="" aria-invalid="false"><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
  </tr>

  <tr>
    <th>聴力①</th>
      <td>聴力1000Hz 右<br><select name="hearing-1000-right"  aria-required="true" aria-invalid="false"><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
      <td>聴力1000Hz 左<br><select name="hearing-1000-left"  aria-required="true" aria-invalid="false"><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
  </tr>

  <tr>
    <th>聴力②</th>
      <td>聴力4000Hz 右<br><select name="hearing-4000-right"  aria-required="true" aria-invalid="false"><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
      <td>聴力4000Hz 左<br><select name="hearing-4000-left"  aria-required="true" aria-invalid="false"><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
  </tr>

  <tr>
    <th>肺活量</th>
      <td>努力肺活量<br><input type="number" id=15 name="effort-lung-capacity" placeholder="努力肺活量" step="0.01" value=""  aria-required="true" aria-invalid="false"> l</td>
      <td>1秒量<br><input type="number" id=16 name="minite-lung-capacity" placeholder="1秒量" step="0.01" value=""  aria-required="true" aria-invalid="false"> l</td>
      <td>1秒率<br><input type="number" id=17 name="minute-lung-rate" placeholder="1秒率" step="0.01" value=""  aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>肝機能①</th>
      <td>AST(GOT)<br><input type="number" id=18 name="AST" placeholder="AST(GOT)" step="1" value="" aria-required="true" aria-invalid="false"> IU/L</td>
      <td>ALT(GOT)<br><input type="number" id=19 name="ALT" placeholder="ALT(GOT)" step="1" value="" aria-required="true" aria-invalid="false"> IU/L</td>
  </tr>

  <tr>
    <th>肝機能②</th>
      <td>ALP<br><input type="number" id=20 name="ALP" placeholder="ALP" step="1" value="" aria-required="true" aria-invalid="false"> U/L</td>
      <td>γ-GT<br><input type="number" id=21 name="γ-GT" placeholder="γ-GT" step="1" value="" aria-required="true" aria-invalid="false"> IU/L</td>
  </tr>

  <tr>
    <th>総蛋白</th>
      <td><input type="number" id=22 name="total-protein" placeholder="総蛋白" step="0.1" value="" aria-invalid="false"> g/dl</td>
  </tr>

  <tr>
    <th>アルブミン</th>
      <td><input type="number" id=23 name="albumin" placeholder="アルブミン" step="0.1" value="" aria-invalid="false"> g/dl</td>
  </tr>

  <tr>
    <th>LD</th>
      <td><input type="number" id=24 name="LD" placeholder="LD" step="1" value=""  aria-invalid="false"> IU/L</td>
  </tr>

  <tr>
    <th>総ビリルビン</th>
      <td><input type="number" id=25 name="total-bil" placeholder="総ビリルビン" step="0.1" value="" max="3" aria-required="true" aria-invalid="false">mg/dl</td>
  </tr>

  <tr>
    <th>血清アミラーゼ</th>
      <td><input type="number" id=26 name="serum-amylase" placeholder="血清アミラーゼ" step="1" value="" aria-invalid="false"> IU/L</td>
  </tr>

  <tr>
    <th>コレステロール</th>
      <td>総コレステロール<br><input type="number" id=27 name="total-cholesterol" placeholder="総コレステロール" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
      <td>LDLコレステロール<br><input type="number" id=28 name="LDL-cholesterol" placeholder="LDLコレステロール" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
      <td>HDLコレステロール<br><input type="number" id=29 name="HDL-cholesterol" placeholder="HDLコレステロール" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
  </tr>

  <tr>
    <th>中性脂肪</th>
      <td><input type="number" name="neutral-fat" placeholder="中性脂肪" value="" aria-invalid="false"> mg/dl</td>
  </tr>

  <tr>
    <th>糖代謝</th>
      <td>空腹時血糖<br><input type="number" name="bs-fasting" placeholder="空腹時血糖" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
      <td>HbA1c<br><input type="number" name="HbA1c" placeholder="HbA1c" step="0.1" value="" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>尿酸</th>
      <td><input type="number" name="uric-acid" placeholder="尿酸" step="0.1" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
  </tr>

  <tr>
    <th>便潜血</th>
      <td>便潜血1回目<br><select name="occult-blood-1" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
      <td>便潜血2回目<br><select name="occult-blood-2" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

  <tr>
    <th>クレアチニン</th>
      <td><input type="number" name="creatinine" placeholder="クレアチニン" step="0.01" value="" aria-required="true" aria-invalid="false"> mg/dl</td>
  </tr>

  <tr>
    <th>eGFR</th>
      <td><input type="number" name="eGFR" placeholder="eGR" step="0.01" value="" aria-required="true" aria-invalid="false"> ml</td>
  </tr>

  <tr>
    <th>尿</th>
      <td>尿蛋白<br><select name="urinary-protein" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
      <td>尿潜血<br><select name="urinary-blood" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
      <td>尿糖<br><select name="urinary-sugar" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

  <tr>
    <th>沈渣①</th>
      <td>白血球<br><input type="number" name="white-blood-cell" placeholder="白血球" value="" aria-invalid="false"> /数視野</td>
      <td>赤血球<br><input type="number" name="red-blood-cell" placeholder="赤血球" value="" aria-invalid="false"> /数視野</td>
      <td>扁平上皮<br><input type="number" name="flat-epithelium" placeholder="扁平上皮" value="" aria-invalid="false"></td>
  </tr>

  <tr>
    <th>沈渣②</th>
      <td>細菌<br><input type="text" name="germ" placeholder="細菌" value="" aria-invalid="false"></td>
      <td>その他<br><input type="text" name="other" placeholder="その他" value="" aria-invalid="false"></td>
  </tr>

  <tr>
    <th>血球数</th>
      <td>白血球数<br><input type="number" name="number-white-blood-cell" placeholder="白血球数" value="" aria-required="true" aria-invalid="false"> 10<sup>2</sup>/μl</td>
      <td>赤血球数<br><input type="number" name="number-red-blood-cell" placeholder="赤血球数" value="" aria-required="true" aria-invalid="false">10<sup>4</sup>/μl</td>
  </tr>

  <tr>
    <th>血色素量</th>
      <td><input type="number" name="hemoglobinopathy" placeholder="血色素量" step="0.1" value="" aria-required="true" aria-invalid="false"> g/dl</td>
  </tr>

  <tr>
    <th>ヘマトクリット</th>
      <td><input type="number" name="hematocrit" placeholder="ヘマトクリット" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>血小板数</th>
      <td><input type="number" name="number-platelet" placeholder="血小板数" step="0.1" value="" aria-required="true" aria-invalid="false">10<sup>4</sup>/μl</td>
  </tr>

  <tr>
    <th>好塩基球(BASO)</th>
      <td><input type="number" name="BASO" placeholder="好塩基球(BASO)" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>好酸球(EOS)</th>
      <td><input type="number" name="EOS" placeholder="好酸球(EOS)" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>好中球(NEUT)</th>
      <td><input type="number" name="NEUT" placeholder="好中球(NEUT)" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>リンパ球(LYMPO)</th>
      <td><input type="number" name="LYMPO" placeholder="リンパ球(LYMPO)" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>単球(MONO)</th>
      <td><input type="number" name="MONO" placeholder="単球(MONO)" step="0.1" value="" aria-required="true" aria-invalid="false"> %</td>
  </tr>

  <tr>
    <th>HBs抗原</th>
      <td><select name="HBs" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

  <tr>
    <th>HCV</th>
      <td>HCV抗体<br><select name="HCV" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
      <td>HCV抗体（協）<br><select name="HCV-2" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

  <tr>
    <th>梅毒</th>
      <td>梅毒 RPR法<br><select name="syphilis-RPR" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
      <td>梅毒 TPHA法<br><select name="syphilis-TPHA" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

  <tr>
    <th>心電図</th>
      <td colspan="2"><input type="text" name="ECG" placeholder="心電図コメント" value="" aria-required="true" aria-invalid="false"></td>
  </tr>

  <tr>
    <th>子宮頸部細胞診</th>
      <td><select name="cervical-cytology" aria-invalid="false"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
  </tr>

</tbody></table>

<div>&nbsp;</div>

<div>
  <button type="submit" class="submit_button" onclick="onButtonclick1()">
    <strong>保存・送信</strong>
  </button>
  <script type="text/javascript" src="getByid.js"></script>
</div>

</html>


export default App;
