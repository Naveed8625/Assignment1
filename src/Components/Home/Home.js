import React from 'react'
import "../Home/Home.css"
import { BiDollarCircle, BiUpArrowAlt, BiDownArrowAlt,BiFile,BiWallet, BiShoppingBag } from 'react-icons/bi';
import Render from './BarChart';
import Pcharts from './PIChart';
import { BsSearch }
  from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'

function Home() {
  return (
    <div className='main-home'>
      <section className='incomBar-section'>

        <div className='main-Div'>
          <div className='img-div img1'>
            <BiDollarCircle className='icon1' />
          </div>
          <div className='data-div'>
            <p className='data-p' >Earning</p>
            <h3>$195K</h3>
            <p className='data-p'><BiUpArrowAlt className='uparrow' /><b className='b1'> 37.8%</b> this month</p>
          </div>
        </div>

        <div className='main-Div'>
        <div className='img-div img2'>
            <BiFile className='icon2' />
          </div>
          <div className='data-div'>
            <p className='data-p' >Orders</p>
            <h3>$2.4K</h3>
            <p className='data-p'><BiDownArrowAlt className='downarrow' /><b className='b2'> 2%</b> this month</p>
          </div>
        </div>

        <div className='main-Div'>
        <div className='img-div img3'>
            <BiWallet className='icon3' />
          </div>
          <div className='data-div'>
            <p className='data-p' >Balance</p>
            <h3>$2.4K</h3>
            <p className='data-p'><BiDownArrowAlt className='downarrow' /><b className='b2'> 2%</b> this month</p>
          </div>
        </div>

        <div className='main-Div'>
        <div className='img-div img4'>
            <BiShoppingBag className='icon4' />
          </div>
          <div className='data-div'>
            <p className='data-p' >Total Sales</p>
            <h3>$89K</h3>
            <p className='data-p'><BiUpArrowAlt className='uparrow' /><b className='b1'> 11%</b> this week</p>
          </div>
        </div>

      </section>

      <section className='BarChart-section'>
        <div className='BarChart-Div1'>
          <Render />
        </div>

        <div className='RoundChart-Div'>
          <Pcharts />
        </div>
      </section>

      {/* ///////////////    /////////////////// */}
      <div className='down-Div1'>

        <div className='D11'>
          <h2>Product Sell</h2>
          <BsSearch className='bSearch' />
          <input type='text' placeholder='search' ></input>
          <p>Last 30 days</p>
          <AiOutlineDown className='lineDown' />
        </div>
        <div className='D22'>
          <h5>Product Name</h5>
          <p>Stock</p>
          <p>price</p>
          <p>Total sales</p>
        </div>
      </div>

      {/* ////////////////   /////////////// */}
      <section className='down-Div2'>

        <div className='DD1'>
          <img src='./imgs/tree.jpg' height="50px" width="150px"></img>
          <h4>Abstract 3D</h4>
          <p className='ppp'>32 in Stock</p>
          <p className='ppp'>$ 45.99</p>
          <p className='ppp'>20</p>
          <p className=''>this is great pic</p>
        </div>

        <div className='DD1'>
          <img src='./imgs/tree.jpg' height="50px" width="150px"></img>
          <h4>Abstract 3D</h4>
          <p className='ppp'>32 in Stock</p>
          <p className='ppp'>$ 45.99</p>
          <p className='ppp'>20</p>
          <p className='pp'>this is great pic</p>
        </div>

      </section>




    </div>
  )
}

export default Home