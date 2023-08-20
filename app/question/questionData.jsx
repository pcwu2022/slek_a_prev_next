export default [
  {
    title: "示範：正常",
    arrow: (
      <div className="navbar_arrow">
        <a href="{{ url_for('pages', page='question1') }}"><span className="arrow arrow1"></span></a>
        <a href="{{ url_for('pages', page='question1') }}"><span className="arrow arrow2"></span></a>
        <a href="{{ url_for('pages', page='question1') }}"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: "有一25歲女性病人因運動完喘得很厲害來到急診。初步診視病人體溫37.1度，心跳120次/分，呼吸速率30次/分，血壓140/90。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：",
    PaO2: 90,
    PaCO2: 40,
    HCO3: 25.5,
    pH: 7.4,
    Na: 140,
    Cl: 100,
    Hb: 11,
    Albumin: 40,
    ref_list: (
      <div>
        <div>
          <h3>這是幫助你測驗對呼吸性與代謝性酸鹼中毒學習成果的網頁，<br />請閱讀完病人的檢驗數據之後：</h3>
          <h3>Step 1：判斷中毒類型並下滑作答</h3>
          <ol className="ref_list">
            <li>
              <b>判斷數值：</b><br />
              經由pH、PaCO<sub>2</sub>與[HCO<sub>3</sub><sup>-</sup>]的變化判斷為哪一種中毒。
              <table className="ref_table_num">
                <thead>
                  <tr>
                    <td></td>
                    <td>pH</td>
                    <td>PaCO<sub>2</sub></td>
                    <td>HCO<sub>3</sub><sup>-</sup></td>
                    <td>PaO<sub>2</sub></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>正常值</td>
                    <td>7.35-7.45</td>
                    <td>35-45 mmHg</td>
                    <td>22-26 mEq/L</td>
                    <td>80-100 mmHg</td>
                  </tr>
                  <tr>
                    <td>Case</td>
                    <td>7.4</td>
                    <td>40</td>
                    <td>25.5</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>判斷</td>
                    <td>正常</td>
                    <td>正常</td>
                    <td>正常</td>
                    <td>正常</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <b>判斷急性或慢性：</b><br />
              代謝性中毒難以從數據判斷急性或慢性，在此忽略不討論，呼吸性中毒需判斷急性與慢性。
            </li>
            <li>
              <b>Anion gap：</b><br />
              代謝性酸中毒需經由Anion gap變化判斷屬於哪種代謝酸中毒。
            </li>
            <li>
              <b>結論：</b><br />
              得出病人診斷結果。
            </li>
          </ol>
        </div>

      </div>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>Step 2：作答完看中毒原因與症狀</h3>
        <h3>右上角指引說明</h3>
        <ol>
          {/* ... (list items content) */}
        </ol>
        <h3><br />～開始為病人做診斷吧～</h3>
      </div>
    )
  },
  {
    title: '教案一',
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question2"><span className="arrow arrow1"></span></a>
        <a href="/pages/question2"><span className="arrow arrow2"></span></a>
        <a href="/pages/question2"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <div className="question_block">
        <p>
          有一40歲女性病人被家人送到急診，已嚴重腹瀉多日。病人體溫39度，心跳63次/分，呼吸速率30次/分，血壓115/85。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
        </p>
      </div>
    ),
    PaO2: '95',
    PaCO2: '33',
    HCO3: '18',
    pH: '7.33',
    Na: '125',
    Cl: '99',
    Hb: '12.2',
    Albumin: '40',
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    )
  },
  {
    title: "教案二",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question3"><span className="arrow arrow1"></span></a>
        <a href="/pages/question3"><span className="arrow arrow2"></span></a>
        <a href="/pages/question3"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <div className="question_block">
        <p>
          有一46歲男性病人長期患有糖尿病，服藥順從性不佳。今天因為意識不清於路邊昏倒，被警察送到急診。初步診視病人體溫37度，心跳78次/分，呼吸速率16次/分，血壓126/82。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
        </p>
      </div>
    ),
    PaO2: "90",
    PaCO2: "28",
    HCO3: "13",
    pH: "7.20",
    Na: "142",
    Cl: "102",
    Hb: "14.2",
    Albumin: "44",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案三",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question4"><span className="arrow arrow1"></span></a>
        <a href="/pages/question4"><span className="arrow arrow2"></span></a>
        <a href="/pages/question4"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一65歲男性病人年輕時就患有糖尿病，長期下來造成慢性腎衰竭，需要定期洗腎。這次來洗腎前發現病人呼吸開始變喘，初步診視病人體溫36.5度，心跳86次/分，呼吸速率31次/分，血壓180/110。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "90",
    PaCO2: "32",
    HCO3: "15",
    pH: "7.15",
    Na: "143",
    Cl: "112",
    Hb: "9.8",
    Albumin: "30",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案四",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question5"><span className="arrow arrow1"></span></a>
        <a href="/pages/question5"><span className="arrow arrow2"></span></a>
        <a href="/pages/question5"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一55歲女性病人長期有慢性腎臟病，需要定期洗腎。近日開始嘔吐不止、高燒不退、意識不清，也因此拖延到這次洗腎，被家人送到急診。初步診視病人體溫40度，心跳103次/分，呼吸速率25次/分，血壓123/75。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "95",
    PaCO2: "32",
    HCO3: "16",
    pH: "7.33",
    Na: "133",
    Cl: "95",
    Hb: "12.2",
    Albumin: "23",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案五",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question6"><span className="arrow arrow1"></span></a>
        <a href="/pages/question6"><span className="arrow arrow2"></span></a>
        <a href="/pages/question6"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一45歲男性病人有噁心、嘔吐與腹痛的症狀。初步診視病人體溫38.3度，心跳92次/分，呼吸速率12次/分，血壓130/70。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "43.5",
    PaCO2: "85.5",
    HCO3: "82",
    pH: "7.61",
    Na: "142",
    Cl: "50",
    Hb: "14.5",
    Albumin: "40",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案六",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question7"><span className="arrow arrow1"></span></a>
        <a href="/pages/question7"><span className="arrow arrow2"></span></a>
        <a href="/pages/question7"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一60歲男性病人，近30年每天抽一包菸。初步診視病人體溫37度，心跳70次/分，呼吸速率15次/分，血壓130/70。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "80",
    PaCO2: "75",
    HCO3: "37",
    pH: "7.32",
    Na: "142",
    Cl: "100",
    Hb: "14.5",
    Albumin: "40",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案七",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question8"><span className="arrow arrow1"></span></a>
        <a href="/pages/question8"><span className="arrow arrow2"></span></a>
        <a href="/pages/question8"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一22歲男性，身材高瘦。體育課打籃球時突然感到右胸劇烈疼痛，因此來到急診。初步診視病人體溫37.5度，心跳86次/分，呼吸速率15次/分，血壓135/90。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "45",
    PaCO2: "52",
    HCO3: "25",
    pH: "7.30",
    Na: "135",
    Cl: "105",
    Hb: "15",
    Albumin: "43",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案八",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question9"><span className="arrow arrow1"></span></a>
        <a href="/pages/question9"><span className="arrow arrow2"></span></a>
        <a href="/pages/question9"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一45歲男性病人患有慢性阻塞性肺疾與肺心症。初步診視病人體溫37.4度，心跳85次/分，呼吸速率18次/分，血壓120/80。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "85",
    PaCO2: "28",
    HCO3: "19",
    pH: "7.46",
    Na: "140",
    Cl: "100",
    Hb: "14",
    Albumin: "42",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案九",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question10"><span className="arrow arrow1"></span></a>
        <a href="/pages/question10"><span className="arrow arrow2"></span></a>
        <a href="/pages/question10"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一52歲女性病人已退休並獨居，近日感到呼吸喘，你發現她的呼吸為短淺呼吸。她表示因為長期有焦慮情形，有服用多種抗焦慮用藥。初步診視病人體溫37.2度，心跳90次/分，呼吸速率26次/分，血壓137/82。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "85",
    PaCO2: "28",
    HCO3: "22",
    pH: "7.48",
    Na: "135",
    Cl: "105",
    Hb: "11",
    Albumin: "37",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question11_new"><span className="arrow arrow1"></span></a>
        <a href="/pages/question11_new"><span className="arrow arrow2"></span></a>
        <a href="/pages/question11_new"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一50歲男性病人由於反覆性膽道阻塞而欲入院放置引流管。由於長年膽道鬱積，病人長期服用 Cholestyramine 以治療皮膚搔癢的症狀。<br />
        放置引流管後多日，病人產生急性腎損傷。病人體溫37.5度，心跳75次/分，呼吸速率20次/分，血壓124/85。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "90",
    PaCO2: "11",
    HCO3: "12",
    pH: "7.09",
    Na: "140",
    Cl: "118",
    Hb: "15.3",
    Albumin: "54",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十一",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question12"><span className="arrow arrow1"></span></a>
        <a href="/pages/question12"><span className="arrow arrow2"></span></a>
        <a href="/pages/question12"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一25歲女性病人於家中洗澡經久不出，家人因擔心報警破門而入後發現病人昏迷不醒，現送到急診，運送過程已先完成插管。初步診視病人體溫36度，心跳65次/分，呼吸速率35次/分，血壓113/75。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "390",
    PaCO2: "36",
    HCO3: "16",
    pH: "7.31",
    Na: "141",
    Cl: "98",
    Hb: "12.3",
    Albumin: "44",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十二",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question13"><span className="arrow arrow1"></span></a>
        <a href="/pages/question13"><span className="arrow arrow2"></span></a>
        <a href="/pages/question13"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        一70歲女性病人插管住在加護病房，因病人經常躁動所以使用Propofol進行化學性約束。執行定期抽血檢查與動脈氣體分析後發現數據異常。初步診視病人體溫38.4度，心跳58次/分，呼吸速率11次/分，血壓120/76。你另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "167.8",
    PaCO2: "23.4",
    HCO3: "14.2",
    pH: "7.40",
    Na: "130",
    Cl: "90",
    Hb: "7.2",
    Albumin: "3.6",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十二",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question13"><span className="arrow arrow1"></span></a>
        <a href="/pages/question13"><span className="arrow arrow2"></span></a>
        <a href="/pages/question13"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        一70歲女性病人插管住在加護病房，因病人經常躁動所以使用Propofol進行化學性約束。執行定期抽血檢查與動脈氣體分析後發現數據異常。初步診視病人體溫38.4度，心跳58次/分，呼吸速率11次/分，血壓120/76。你另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "167.8",
    PaCO2: "23.4",
    HCO3: "14.2",
    pH: "7.40",
    Na: "130",
    Cl: "90",
    Hb: "7.2",
    Albumin: "3.6",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十四",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question15"><span className="arrow arrow1"></span></a>
        <a href="/pages/question15"><span className="arrow arrow2"></span></a>
        <a href="/pages/question15"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一70歲女性病人平時住在安養機構，近日發現食慾不振、疲倦、反射消失因此送醫。初步診視病人體溫37度，心跳65次/分，呼吸速率25次/分，血壓120/70。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "37",
    PaCO2: "49",
    HCO3: "45",
    pH: "7.58",
    Na: "145",
    Cl: "86",
    Hb: "9.5",
    Albumin: "40",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十五",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question16"><span className="arrow arrow1"></span></a>
        <a href="/pages/question16"><span className="arrow arrow2"></span></a>
        <a href="/pages/question16"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一70歲女性病人，這一年家人發現病人呼吸費力而來到你的診間。初步診視病人體溫37度，心跳70次/分，呼吸速率16次/分，血壓120/80。你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "43.5",
    PaCO2: "52",
    HCO3: "31.5",
    pH: "7.41",
    Na: "142",
    Cl: "102",
    Hb: "10.5",
    Albumin: "40",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十六",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question17"><span className="arrow arrow1"></span></a>
        <a href="/pages/question17"><span className="arrow arrow2"></span></a>
        <a href="/pages/question17"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一25歲男性病人自小患有慢性支氣管炎。今日早晨醒來時特別嚴重，因此緊急送醫。初步診視病人體溫37度，心跳110次/分，呼吸速率30次/分，血壓120/70。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "35",
    PaCO2: "60",
    HCO3: "31",
    pH: "7.34",
    Na: "132",
    Cl: "100",
    Hb: "15.2",
    Albumin: "44",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: "教案十七",
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question18"><span className="arrow arrow1"></span></a>
        <a href="/pages/question18"><span className="arrow arrow2"></span></a>
        <a href="/pages/question18"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <p>
        有一18歲男性病人先前因嚴重車禍而成為植物人。初步診視病人體溫37.0度，心跳60次/分，呼吸速率10次/分，血壓125/77。你為他做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
      </p>
    ),
    PaO2: "96",
    PaCO2: "22",
    HCO3: "16",
    pH: "7.48",
    Na: "140",
    Cl: "110",
    Hb: "13",
    Albumin: "40",
    ref_list: (
      <ol className="ref_list">
        {/* ... Ref List content */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Additional content */}
        </ol>
      </div>
    ),
  },
  {
    title: '教案十八',
    arrow: (
      <div className="navbar_arrow">
        <a href="/pages/question18"><span className="arrow arrow1"></span></a>
        <a href="/pages/question18"><span className="arrow arrow2"></span></a>
        <a href="/pages/question18"><span className="arrow arrow3"></span></a>
      </div>
    ),
    question: (
      <div className="question_block">
        <p>
          有一37歲女性病人突然覺得心悸，呼吸喘且合併胸痛，剛剛短暫昏厥了一次。初步診視病人體溫37.1度，心跳100次/分，呼吸速率26次/分，血壓80/50。醫師懷疑她有肺血管相關疾病因此為她照了CT，發現她有肺動脈栓塞，你為她做一般抽血檢查與動脈氣體分析，也另外做了一些檢驗，重要數據如下：
        </p>
      </div>
    ),
    PaO2: '80',
    PaCO2: '33',
    HCO3: '22.7',
    pH: '7.46',
    Na: '140',
    Cl: '105',
    Hb: '12',
    Albumin: '40',
    ref_list: (
      <ol className="ref_list">
        {/* ... Content of ref_list */}
      </ol>
    ),
    answer_button: [
      [true, false, false, false, false],
      [true],
      [false, false, false, false],
      [false],
      [false],
      [false]
    ],
    additional: (
      <div>
        <h3>中毒原因與症狀</h3>
        <ol>
          {/* ... Content of additional */}
        </ol>
      </div>
    )
  }
  
];
  