import React from 'react'

function Add_student() {
    return (
        <div className='add'>
            <h1>Student Infomation</h1>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='student' className='form-label'>student</label>
            <input type='text' className='form-control' placeholder='Enter student_ID' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>title</label><br />
            <select id="fruitsDropdown" className='form-control'>
              <option value="1">นาย</option>
              <option value="2">นางสาว</option>
            </select>
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='firstname' className='form-label'>firstname</label>
            <input type='text' className='form-control' placeholder='Enter firstname' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='lastname' className='form-label'>lastname</label>
            <input type='text' className='form-control' placeholder='Enter lastname' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='naemailme' className='form-label'>email</label>
            <input type='text' className='form-control' placeholder='Enter email' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='tel' className='form-label'>tel</label>
            <input type='text' className='form-control' placeholder='Enter tel' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>username</label>
            <input type='text' className='form-control' placeholder='Enter username' />
          </div>
        </form>
      </div>
      <div className='infomation'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>password</label>
            <input type='password' className='form-control' placeholder='Enter password' />
          </div>
          <button className='btn btn-success'>Add student</button>
        </form>
      </div>
      <hr/>
      <div className='student'>
      <button className='btn btn-primary'>Show student</button>
      </div>
        </div>
    )
}

export default Add_student