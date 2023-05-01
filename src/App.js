import './App.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

  return (
    <div className="App" style={{height: '100vh'}}>
      <Carousel />
    </div>
  );
}

export default App;

const Carousel = () => {
	const settings = {
		dots: true,          // 캐러셀 밑에 ... 을 표시할지
		infinite: true,      // 슬라이드가 끝까지 가면 다시 처음으로 반복
		speed: 3000,         // 속도
		autoplay: true,      // 자동 재생
		autoplaySpeed: 3000, // 자동 재생 속도
		slidesToShow: 1,     // 한 번에 보여줄 슬라이드 개수
		slidesToScroll: 1,   // 한 번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
		prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {dots}
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">home</span>
        <span class="material-symbols-outlined">menu</span>
      </div>
    ),
	};

	return (
		<div>
			<Slider {...settings}>
				<div className='slides slide1'>
					
				</div>
				<div className='slides slide2'>
					
				</div>
				<div className='slides slide3'>
					
				</div>
			</Slider>
		</div>
	);
};
                                        
const NextArrow = ({ onClick }) => { // props로 onClick을 전달해줘야 한다.
	return (
		<button
			onClick={onClick}
			type='button'
      style={{
        position : 'absolute',
        top : '50%',
        right : '0'
      }}
		>
		다음
		</button>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			type='button'
      style={{
        position : 'absolute',
        top : '50%',
        left : '0',
        zIndex : '10000000'
      }}
		>
		이전
		</button>
	);
};

