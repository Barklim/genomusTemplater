import React from 'react';
// import styles from './PdfTemplate.css';
import './PdfTemplate.css';

export default function PdfTemplate(props): JSX.Element {

console.log('TEST123')
console.log(props)

  return (
    <div className="">
			<div className="fixWrapper">

				<div className='page1Img'>
					<img src="components/PdfTemplate/img/background1.jpg" className="fixImage1"/>
				</div>

				<div style={{ position:'absolute', left:'53.24px', top:'116.22px' }} className="cls_002"><span className="cls_002 p1line1">Жизнь наших клеток управляется генами. Гены - участки</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'131.51px' }} className="cls_002"><span className="cls_002">длинной цепочки ДНК, отвечающие за синтез несущих какую-</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'117.13px', fontSize:'36.3px', letterSpacing:'3px' }} className="cls_004"><span className="cls_004 p2line1">genomus.herokuapp.com/</span></div>
	
				<div style={{ position:'absolute', left:'17.24px', top:'146.81px' }} className="cls_002"><span className="cls_002">либо функцию продуктов. Всего у человека примерно 25 000</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'162.10px' }} className="cls_002"><span className="cls_002">генов, все они распределены по хромосомам, которых у</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'177.40px' }} className="cls_002"><span className="cls_002">человека 23 пары. Это значит, что каждый ген существует в</span></div>

				<div style={{ position:'absolute', left:'839.43px', top:'159.00px', fontSize:'36.3px', letterSpacing:'3px' }} className="cls_005"><span className="cls_005">Ваш GenId:</span></div>


				<div style={{ position:'absolute', left:'839.43px', top:'210.00px', fontSize:'36.3px', letterSpacing:'3px', color:'#0495a8', fontWeight:'bold' }} className="cls_005"><span className="cls_005">{props.userInfo.genid}</span></div>

				<div style={{ position:'absolute', left:'839.43px', top:'270.00px', fontSize:'36.3px', letterSpacing:'3px', color:'#0495a8', fontWeight:'bold' }} className="cls_005"><span className="cls_005">{props.userInfo.firstname}</span></div>
				<div style={{ position:'absolute', left:'839.43px', top:'300.00px', fontSize:'36.3px', letterSpacing:'3px', color:'#0495a8', fontWeight:'bold' }} className="cls_005"><span className="cls_005">{props.userInfo.lastname}</span></div>




				<div style={{ position:'absolute', left:'17.24px', top:'192.69px' }} className="cls_002"><span className="cls_002">двух вариантах - один вариант в одной хромосоме из пары, а</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'207.99px' }} className="cls_002"><span className="cls_002">другой - в другой хромосоме, из той же пары. Каждый из двух</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'223.28px' }} className="cls_002"><span className="cls_002">вариантов генов называется аллелью. Аллели могут быть</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'238.58px' }} className="cls_002"><span className="cls_002">доминантными и рецессивными. В случае, если аллель</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'253.88px' }} className="cls_002"><span className="cls_002">доминантная, её действие обязательно будет проявляться.</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'269.17px' }} className="cls_002"><span className="cls_002">Рецессивные же аллели будут проявляться только в двух</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'284.47px' }} className="cls_002"><span className="cls_002">случаях - если у человека обе аллели одинаковые, или если</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'299.76px' }} className="cls_002"><span className="cls_002">второй копии просто нет. Последний случай характерен для</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'315.06px' }} className="cls_002"><span className="cls_002">некоторых заболеваний, которыми болеют только мужчины -</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'330.35px' }} className="cls_002"><span className="cls_002">например, гемофилии.</span></div>
				
				<div style={{ position:'absolute', left:'580.4px', top:'390.91px' }} className="cls_003"><span className="cls_003">Для регистрации на странице входа нажмите</span></div>
				
				<div style={{ position:'absolute', left:'53.24px', top:'358.95px' }} className="cls_002"><span className="cls_002">В случае аутосомно-рецессивных (связанных с</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'406.69px' }} className="cls_003"><span className="cls_003">кнопку «Регистрация» и введите свой GenId, Email</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'374.24px' }} className="cls_002"><span className="cls_002">попаданием двух рецессивных дефектных аллелей в гены</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'422.47px' }} className="cls_003"><span className="cls_003">и пароль.</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'389.54px' }} className="cls_002"><span className="cls_002">ребёнка при зачатии) заболеваний оба родителя могут не</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'438.25px' }} className="cls_003"><span className="cls_003">Проверить совместимость генотипов:</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'404.83px' }} className="cls_002"><span className="cls_002">знать о наличии у них дефектных генов и быть абсолютно</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'420.13px' }} className="cls_002"><span className="cls_002">здоровыми, но вероятность рождения больного ребёнка в</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'454.03px' }} className="cls_003"><span className="cls_003">МЕНЮ > СОВМЕСТИМОСТЬ</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'435.43px' }} className="cls_002"><span className="cls_002">такой семье будет составлять 25%.</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'470.81px' }} className="cls_003"><span className="cls_003">Посмотреть свой генотип:</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'486.59px' }} className="cls_003"><span className="cls_003">МЕНЮ > АНКЕТА > ПРОФИЛЬ</span></div>
				
				<div style={{ position:'absolute', left:'53.24px', top:'465.02px' }} className="cls_002"><span className="cls_002">Несмотря на то, что дефекты в генах, вызывающие</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'502.37px' }} className="cls_003"><span className="cls_003">Поменять пароль:</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'480.31px' }} className="cls_002"><span className="cls_002">развитие аутосомно-рецессивных заболеваний, встречаются</span></div>
				<div style={{ position:'absolute', left:'580.4px', top:'518.15px' }} className="cls_003"><span className="cls_003">МЕНЮ > АНКЕТА > НАСТРОЙКИ</span></div>
				
				<div style={{ position:'absolute', left:'17.24px', top:'495.61px' }} className="cls_002"><span className="cls_002">по отдельности нечасто, в сумме больным рождается каждый</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'510.90px' }} className="cls_002"><span className="cls_002">сотый ребёнок.</span></div>
				
				<div style={{ position:'absolute', left:'53.24px', top:'539.49px' }} className="cls_002"><span className="cls_002">Наш проект направлен на выявление и предотвращение</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'554.79px' }} className="cls_002"><span className="cls_002">таких случаев. Вы можете сравнить свой генотип и генотип</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'570.08px' }} className="cls_002"><span className="cls_002">своего партнёра с помощью нашей системы. Кроме того, вы</span></div>
				<div style={{ position:'absolute', left:'17.24px', top:'585.38px' }} className="cls_002"><span className="cls_002">можете проверить наличие у себя отдельных мутаций.</span></div>
				
				<div style={{ position:'absolute', left:'642.51px', top:'763.49px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">ВНИМАНИЕ! В приложении содержатся Ваши</span></div>
				<div style={{ position:'absolute', left:'613.08px', top:'777.78px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">персональные данные! Не давайте никому данные для</span></div>
				<div style={{ position:'absolute', left:'796.97px', top:'792.08px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">входа!</span></div>


			</div>

    </div>
  );
}

// top + 100
// left 452.40px -> 580.4px; // 128px

				// <div style={{ position:'absolute', left:'53.24px', top:'116.22px' }} className="cls_002"><span className="cls_002 p1line1">Жизнь наших клеток управляется генами. Гены - участки</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'130.51px' }} className="cls_002"><span className="cls_002">длинной цепочки ДНК, отвечающие за синтез несущих какую-</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'117.13px', fontSize:'36.3px', letterSpacing:'3px' }} className="cls_004"><span className="cls_004 p2line1">genomus.herokuapp.com/</span></div>
	
				// <div style={{ position:'absolute', left:'17.24px', top:'144.81px' }} className="cls_002"><span className="cls_002">либо функцию продуктов. Всего у человека примерно 25 000</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'159.10px' }} className="cls_002"><span className="cls_002">генов, все они распределены по хромосомам, которых у</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'173.40px' }} className="cls_002"><span className="cls_002">человека 23 пары. Это значит, что каждый ген существует в</span></div>

				// <div style={{ position:'absolute', left:'839.43px', top:'159.00px', fontSize:'36.3px', letterSpacing:'3px' }} className="cls_005"><span className="cls_005">Ваш GenId:</span></div>

				// <div style={{ position:'absolute', left:'17.24px', top:'187.69px' }} className="cls_002"><span className="cls_002">двух вариантах - один вариант в одной хромосоме из пары, а</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'201.99px' }} className="cls_002"><span className="cls_002">другой - в другой хромосоме, из той же пары. Каждый из двух</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'216.28px' }} className="cls_002"><span className="cls_002">вариантов генов называется аллелью. Аллели могут быть</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'230.58px' }} className="cls_002"><span className="cls_002">доминантными и рецессивными. В случае, если аллель</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'244.88px' }} className="cls_002"><span className="cls_002">доминантная, её действие обязательно будет проявляться.</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'259.17px' }} className="cls_002"><span className="cls_002">Рецессивные же аллели будут проявляться только в двух</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'273.47px' }} className="cls_002"><span className="cls_002">случаях - если у человека обе аллели одинаковые, или если</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'287.76px' }} className="cls_002"><span className="cls_002">второй копии просто нет. Последний случай характерен для</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'302.06px' }} className="cls_002"><span className="cls_002">некоторых заболеваний, которыми болеют только мужчины -</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'316.35px' }} className="cls_002"><span className="cls_002">например, гемофилии.</span></div>
				
				// <div style={{ position:'absolute', left:'580.4px', top:'390.91px' }} className="cls_003"><span className="cls_003">Для регистрации на странице входа нажмите</span></div>
				
				// <div style={{ position:'absolute', left:'53.24px', top:'344.95px' }} className="cls_002"><span className="cls_002">В случае аутосомно-рецессивных (связанных с</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'405.69px' }} className="cls_003"><span className="cls_003">кнопку «Регистрация» и введите свой GenId, Email</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'359.24px' }} className="cls_002"><span className="cls_002">попаданием двух рецессивных дефектных аллелей в гены</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'420.47px' }} className="cls_003"><span className="cls_003">и пароль.</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'373.54px' }} className="cls_002"><span className="cls_002">ребёнка при зачатии) заболеваний оба родителя могут не</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'435.25px' }} className="cls_003"><span className="cls_003">Проверить совместимость генотипов:</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'387.83px' }} className="cls_002"><span className="cls_002">знать о наличии у них дефектных генов и быть абсолютно</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'402.13px' }} className="cls_002"><span className="cls_002">здоровыми, но вероятность рождения больного ребёнка в</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'450.03px' }} className="cls_003"><span className="cls_003">МЕНЮ > СОВМЕСТИМОСТЬ</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'416.43px' }} className="cls_002"><span className="cls_002">такой семье будет составлять 25%.</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'465.81px' }} className="cls_003"><span className="cls_003">Посмотреть свой генотип:</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'480.59px' }} className="cls_003"><span className="cls_003">МЕНЮ > АНКЕТА > ПРОФИЛЬ</span></div>
				
				// <div style={{ position:'absolute', left:'53.24px', top:'445.02px' }} className="cls_002"><span className="cls_002">Несмотря на то, что дефекты в генах, вызывающие</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'495.37px' }} className="cls_003"><span className="cls_003">Поменять пароль:</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'459.31px' }} className="cls_002"><span className="cls_002">развитие аутосомно-рецессивных заболеваний, встречаются</span></div>
				// <div style={{ position:'absolute', left:'580.4px', top:'510.15px' }} className="cls_003"><span className="cls_003">МЕНЮ > АНКЕТА > НАСТРОЙКИ</span></div>
				
				// <div style={{ position:'absolute', left:'17.24px', top:'473.61px' }} className="cls_002"><span className="cls_002">по отдельности нечасто, в сумме больным рождается каждый</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'487.90px' }} className="cls_002"><span className="cls_002">сотый ребёнок.</span></div>
				// <div style={{ position:'absolute', left:'53.24px', top:'516.49px' }} className="cls_002"><span className="cls_002">Наш проект направлен на выявление и предотвращение</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'530.79px' }} className="cls_002"><span className="cls_002">таких случаев. Вы можете сравнить свой генотип и генотип</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'545.08px' }} className="cls_002"><span className="cls_002">своего партнёра с помощью нашей системы. Кроме того, вы</span></div>
				// <div style={{ position:'absolute', left:'17.24px', top:'559.38px' }} className="cls_002"><span className="cls_002">можете проверить наличие у себя отдельных мутаций.</span></div>
				
				// <div style={{ position:'absolute', left:'642.51px', top:'763.49px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">ВНИМАНИЕ! В приложении содержатся Ваши</span></div>
				// <div style={{ position:'absolute', left:'613.08px', top:'777.78px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">персональные данные! Не давайте никому данные для</span></div>
				// <div style={{ position:'absolute', left:'760.97px', top:'792.08px', textDecoration: 'underline' }} className="cls_007"><span className="cls_007">входа!</span></div>




// 			<div style={{ position:'absolute', left:'50%', margin-left:'-420px', top:'605px', width:'841px', height:'595px', border-style:'outset', overflow:'hidden' }}>
			// <div className="fixWrapper1">
			// 	<div style={{ position:'absolute', left:'0px', top:'0px' }}>
			// 		<img src="components/PdfTemplate/img/background2.jpg" className="fixImage2" />
			// 	</div>
			// </div>