import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function AboutModal (props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title dir='rtl' className='font-weight-bold text-success text-right w-100' id='contained-modal-title-vcenter'>
          درباره اکسیر
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-right'>
        <p dir='rtl'>
          اپلیکیشن
          {' '}
          <span className='font-weight-bold text-success'>اکسیر</span>
          {' '}
          یک سرویس کوتاه کننده لینک است که با
          {' '}
          <span className='font-weight-bold text-success'>هنر</span>
          {' '}
          ترکیب شده است.
          {/* استفاده از این سرویس کاملا رایگان، این امکان را به هنرمندان می‌دهد */}
          {/* که کارهای نفیس آنها در فضای مجازی فرصت بیشتری برای ارایه داشته باشند. */}
        </p>
        <h3>روش استفاده</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button className='font-weight-bold' onClick={props.onHide}>خروج</Button>
      </Modal.Footer>
    </Modal>
  )
}
