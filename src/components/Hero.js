import Carousel from 'react-bootstrap/Carousel';
import twa from './../assets/twa.jpg'
import day1 from './../assets/day1.jpg'
import jawara from './../assets/jawara2.jpg'

function UncontrolledExample() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='judul animate__heartBeat'>MIPA 7 TERBAIK ❤</h1>
          </div>
        </div>
      </div>
      <Carousel className='mt-3'>
        <Carousel.Item>
          <img
            className="d-block w-100" // Ganti w-200 menjadi w-100 agar responsif
            alt='a'
            src={twa}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bold' }}>TAWANGMANGU</h3>
            <p>Tawangmangu hold so many memories, isn't it?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100' // Ganti w-200 menjadi w-100 agar responsif
            alt='b'
            src={day1}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bold' }}>DAY 1 SCHOOL</h3>
            <p>Kangen banget sih hari pertama kelas 11.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100' // Ganti w-100 agar responsif
            alt='c'
            src={jawara}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bold' }}>JAWARA</h3>
            <p>Lomba pertama kita njirrr</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;