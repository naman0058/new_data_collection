<%- include ('./header.ejs') %>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    align-items: center;
   
   
}

.wrapper{
    max-width: 1090px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
}

.wrapper .table{
    background: #fff;
    width: calc(33% - 20px);
    padding: 30px 30px;
    position: relative;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

@media (max-width: 1020px){
    .wrapper .table{
        width: calc(50% - 20px);
        margin-bottom: 40px;
    }
}

@media (max-width: 698px){
    .wrapper .table{
        width: 100%;
    }
}

.table .price-section{
   display: flex;
   justify-content: center;
}

.price-section .price-area{
    height: 120px;
    width: 120px;
    background: #ffd861;
    border-radius: 50%;
    padding: 2px;
}

.price-section .price-area .inner-area{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    line-height: 117px;
    text-align: center;
    position: relative;
}

.price-area .inner-area .text{
    font-size: 25px;
    font-weight: 400;
    position: absolute;
    top: -10px;
    left: 17px;
}

.price-area .inner-area .price{
    font-size: 55px;
    font-weight: 500;
}

.table .package-name{
    width: 100%;
    height: 2px;
    background: #ffecb3;
    margin: 35px 0;
    position: relative;
}

.table .package-name::before{
    position: absolute;
    content: "Basic";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    font-size: 25px;
    padding: 0 10px;
    font-weight: bolder;
}

.table .features li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.features li .list-name{
    font-size: 17px;
    font-weight: 400;
}

.features li .icon{
    font-size: 15px;
}

.features li .icon.check{
    color: #2db94d;
}

.features li .icon.cross{
    color: #cd3241;
}

.table .btn{
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

.table .btn button{
    width: 80%;
    height: 50px;
    font-weight: 700;
    color: #fff;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.basic .price-area,
.basic .inner-area{
    background: #ffd861;
}

.basic .btn button{
    background: #fff;
    color: #ffd861;
    border: 2px solid #ffd861;
}

.basic .btn button:hover{
    border-radius: 6px;
    background: #ffd861;
    color: #fff;
}

.Premium .price-area,
.Premium .inner-area{
    background: #a26bfa;
}

.Premium .btn button{
    background: #fff;
    color: #a26bfa;
    border: 2px solid #a26bfa;
}

.Premium .btn button:hover{
    border-radius: 6px;
    background: #a26bfa;
    color: #fff;
}

.Ultimate .price-area,
.Ultimate .inner-area{
    background: #43ef8b;
}

.Ultimate .btn button{
    background: #fff;
    color: #43ef8b;
    border: 2px solid #43ef8b;
}

.Ultimate .btn button:hover{
    border-radius: 6px;
    background: #43ef8b;
    color: #fff;
}

.basic .package-name{
    background: #ffecb3;
}

.Premium .package-name{
    background: #a26bfa;
}

.Ultimate .package-name{
    background: #43ef8b;
}

.basic .package-name::before{
    content: "Basic";
}

.Premium .package-name::before{
    content: "Premium";
}

.Ultimate .package-name::before{
    content: "Ultimate";
}

.basic ::selection,
.basic .price-area,
.basic .inner-area{
    background: #ffd861;
}

.Premium ::selection,
.Premium .price-area,
.Premium .inner-area{
    background: #a26bfa;
}

.Ultimate ::selection,
.Ultimate .price-area,
.Ultimate .inner-area{
    background: #43ef8b;
}


</style>

<a id='qodef-back-to-top' href='#'>
  <span class="qodef-btt-text">TOP</span>
  </a>
  <div class="qodef-content">
  <div class="qodef-content-inner">
  <div class="qodef-title-holder qodef-centered-type qodef-title-va-header-bottom qodef-preload-background qodef-has-bg-image qodef-bg-parallax" style="height: 520px;background-color: #f8f8f8;background-image:url(/images/dubai1.jpg);" data-height="520">
  <div class="qodef-title-image">
  <img itemprop="image" src="/images/dubai1.jpg" alt="d" />
  </div>
  <div class="qodef-title-wrapper" style="height: 520px">
  <div class="qodef-title-inner">
  <div class="qodef-grid">
  <span class="qodef-page-subtitle">Destinations</span>
  <h1 class="qodef-page-title entry-title">VISA</h1>
  </div>
  </div>
  </div>
  </div>
  <div class="qodef-container">
    <div class="qodef-container-inner clearfix qodef-tour-item-single-holder">
  <div class="qodef-tour-item-section qodef-information-section qodef-tab-container" id="tour-item-info-id">
    <div class="qodef-grid-row qodef-grid-large-gutter">
    <div class="qodef-grid-col-9">
     
      <html lang="en">

        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pricing</title>
          <link rel="stylesheet" href="./pricing.css">
          <script src="https://kit.fontawesome.com/66aa7c98b3.js" crossorigin="anonymous"></script>
        </head>
        
        <body>
          <div class="wrapper">
            <h3>Prices for Children - Dubai Tourist Visa + Medical Insurance (COVID)</h3>
            <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">14</span>
                  </div>
                </div>
              </div>
              <div>
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Ultimate">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
<h3>Prices for Dubai Tourist Visa + Medical Insurance (COVID)</h3>
            <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">14</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Ultimate">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div>
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>

<h3>Prices for Dubai Express Tourist Visa + Medical Insurance (COVID)</h3>
              <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div >
              
            </div>
          </div>
        </body>
        
        </html>
        <div><h3>Pay online</h3></div>

<br>

<p>Enter your credit or debit card details to purchase a UAE tourist visa.</p>

<br>

<a style="float: left;"><img alt="Upload-Documents UAE visit visa" src="/SFImage/Images/upload-documents.png" data-displaymode="Original" title="Upload-Documents UAE visit visa"></a> 

<div><h3>Upload your documents</h3></div>

<br>

<p>Upload coloured copies of the front and back of your passport. Also, upload a photograph with white background</p>

<br>

<a style="float: left;"><img alt="Download UAE e-visa" src="/SFImage/Images/download-e-visa9ad403e413a06dce84b1ff000062a8f2.png" data-displaymode="Original" title="Download UAE e-visa"></a> 

<div><h3>Download your e-visa</h3></div>

<br>

<p>Keep track of your UAE visa status and get Dubai visa on mail.</p>

<br>

<p>We always do our best to give our customers the lowest price on UAE tourist visas.  But if you find a lower qualified price on 30, 90 or airport to airport visas, we'll be happy to match it. That's a Musafir.com guarantee. Visit your nearest <a href="https://www.musafir.com/About/Default.aspx#actionBarSection2" title="" class=""><strong>Musafir branch</strong></a> or call 600544405 for more information. <!-- You can even WhatsApp us on +971 6 513 9908. --></p>






<p class="fineprint" style="clear: both;">*Prices listed are inclusive of VAT charges.</p>


<p><span style="font-size: 14px; font-weight: bold;">How to track Dubai visa status,  validity online using your passport</span></p>

 <ol> 
<li>Visit <a href="https://smartservices.ica.gov.ae/echannels/web/client/default.html#/fileValidity" title="" class="">Smart Services ICA</a></li> 
<li>Select passport information</li> 
<li>Select either 'residency' or 'visa'</li> 
<li>Enter passport number and passport expiry date</li> 
<li>Enter nationality from the dropdown on the right. A corresponding number will appear on the box on the left.</li> 
<li>Select the captcha check box and click on search. The page will now display your Dubai visa details along with date of expiry.</li> 
</ol>
<br>
<p><span style="font-size: 14px; font-weight: bold;">What are the&nbsp;requirements for Dubai Visa?</span></p>

 <ol> <li>A copy of guarantor's passport's first, last and visa pages</li> <li>A copy of your Emirates ID</li> <li>A copy of each visitor's passport's first and last pages</li> 
<li>Each visitor's passport-size photograph, taken against a white background</li> <li>Each visitor's passport should have a minimum validity of 6 months</li> <li>If the visitor is your spouse, the same must be mentioned on your passport</li> <li>Additional cash deposit of up to AED 5,500 may be required for certain visitors (not applicable for family visas*).</li></ol>



       

    </div>
    <div class="qodef-grid-col-3">
      <div class="qodef-custom-nlf-sidearea">
        <h4 class="qodef-custom-nlf-title">Apply Online</h4><span class="qodef-custom-nlf-text"></span>
        <div class="qodef-grid-row qodef-grid-normal-gutter">
        <div><span class="wpcf7-form-control-wrap your-name">
          <!-- <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="" /> -->
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
              <option value="">Type of visa</option>
              <option value="10387,10483">14 day UAE Visa</option>
              <option value="10352,10483">30 day UAE Visa</option>
              <option value="10354,10484">90 day UAE Visa</option>
              <option value="10020">90 day UAE Visa - Multiple Entry</option>
              <option value="7758,10483">30 day UAE Express Visa</option>
              <option value="7763,10484">90 day UAE Express Visa</option>
              <option value="11162,11187">30 day UAE (Abu Dhabi) Tourist Visa</option>
              <option value="11163,11188">90 day UAE (Abu Dhabi) Tourist Visa</option>
          </select>
        </span></div>
        <div><span class="wpcf7-form-control-wrap your-email">
          <input type=""  value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"  placeholder="Nationality" />
        </span></div>
        <div><span class="wpcf7-form-control-wrap your-name">
          <!-- <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="" /> -->
          <label for="">Travelers:</label>
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
           <option value="1">1 adult</option>
           <option value="2">2 adults</option>
           <option value="3">3 adults</option>
           <option value="4">4 adults</option>
           <option value="5">5 adults</option>
           <option value="6">6 adults</option>
           <option value="7">7 adults</option>
           <option value="8">8 adults</option>
           <option value="9">9 adults</option>
          </select>
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
          <option value="0">0 children</option>
          <option value="1">1 child</option>
          <option value="2">2 children</option>
          <option value="3">3 children</option>
          <option value="4">4 children</option>
          <option value="5">5 children</option>
          <option value="6">6 children</option>
          <option value="7">7 children</option>
          <option value="8">8 children</option>
           </select>
        </span></div>
      </div>
      <input type="submit" value="Apply" class="wpcf7-form-control wpcf7-submit" />
    </div><div class="wpcf7-response-output" aria-hidden="true"></div>
  </form></div> </div>
    </div>
    </div>
    
    </div>
    </div>

  </div> 
  </div>
   
  <%- include ('./footer.ejs') %><%- include ('./header.ejs') %>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    align-items: center;
   
   
}

.wrapper{
    max-width: 1090px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
}

.wrapper .table{
    background: #fff;
    width: calc(33% - 20px);
    padding: 30px 30px;
    position: relative;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

@media (max-width: 1020px){
    .wrapper .table{
        width: calc(50% - 20px);
        margin-bottom: 40px;
    }
}

@media (max-width: 698px){
    .wrapper .table{
        width: 100%;
    }
}

.table .price-section{
   display: flex;
   justify-content: center;
}

.price-section .price-area{
    height: 120px;
    width: 120px;
    background: #ffd861;
    border-radius: 50%;
    padding: 2px;
}

.price-section .price-area .inner-area{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    line-height: 117px;
    text-align: center;
    position: relative;
}

.price-area .inner-area .text{
    font-size: 25px;
    font-weight: 400;
    position: absolute;
    top: -10px;
    left: 17px;
}

.price-area .inner-area .price{
    font-size: 55px;
    font-weight: 500;
}

.table .package-name{
    width: 100%;
    height: 2px;
    background: #ffecb3;
    margin: 35px 0;
    position: relative;
}

.table .package-name::before{
    position: absolute;
    content: "Basic";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    font-size: 25px;
    padding: 0 10px;
    font-weight: bolder;
}

.table .features li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.features li .list-name{
    font-size: 17px;
    font-weight: 400;
}

.features li .icon{
    font-size: 15px;
}

.features li .icon.check{
    color: #2db94d;
}

.features li .icon.cross{
    color: #cd3241;
}

.table .btn{
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

.table .btn button{
    width: 80%;
    height: 50px;
    font-weight: 700;
    color: #fff;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.basic .price-area,
.basic .inner-area{
    background: #ffd861;
}

.basic .btn button{
    background: #fff;
    color: #ffd861;
    border: 2px solid #ffd861;
}

.basic .btn button:hover{
    border-radius: 6px;
    background: #ffd861;
    color: #fff;
}

.Premium .price-area,
.Premium .inner-area{
    background: #a26bfa;
}

.Premium .btn button{
    background: #fff;
    color: #a26bfa;
    border: 2px solid #a26bfa;
}

.Premium .btn button:hover{
    border-radius: 6px;
    background: #a26bfa;
    color: #fff;
}

.Ultimate .price-area,
.Ultimate .inner-area{
    background: #43ef8b;
}

.Ultimate .btn button{
    background: #fff;
    color: #43ef8b;
    border: 2px solid #43ef8b;
}

.Ultimate .btn button:hover{
    border-radius: 6px;
    background: #43ef8b;
    color: #fff;
}

.basic .package-name{
    background: #ffecb3;
}

.Premium .package-name{
    background: #a26bfa;
}

.Ultimate .package-name{
    background: #43ef8b;
}

.basic .package-name::before{
    content: "Basic";
}

.Premium .package-name::before{
    content: "Premium";
}

.Ultimate .package-name::before{
    content: "Ultimate";
}

.basic ::selection,
.basic .price-area,
.basic .inner-area{
    background: #ffd861;
}

.Premium ::selection,
.Premium .price-area,
.Premium .inner-area{
    background: #a26bfa;
}

.Ultimate ::selection,
.Ultimate .price-area,
.Ultimate .inner-area{
    background: #43ef8b;
}


</style>

<a id='qodef-back-to-top' href='#'>
  <span class="qodef-btt-text">TOP</span>
  </a>
  <div class="qodef-content">
  <div class="qodef-content-inner">
  <div class="qodef-title-holder qodef-centered-type qodef-title-va-header-bottom qodef-preload-background qodef-has-bg-image qodef-bg-parallax" style="height: 520px;background-color: #f8f8f8;background-image:url(/images/dubai1.jpg);" data-height="520">
  <div class="qodef-title-image">
  <img itemprop="image" src="/images/dubai1.jpg" alt="d" />
  </div>
  <div class="qodef-title-wrapper" style="height: 520px">
  <div class="qodef-title-inner">
  <div class="qodef-grid">
  <span class="qodef-page-subtitle">Destinations</span>
  <h1 class="qodef-page-title entry-title">VISA</h1>
  </div>
  </div>
  </div>
  </div>
  <div class="qodef-container">
    <div class="qodef-container-inner clearfix qodef-tour-item-single-holder">
  <div class="qodef-tour-item-section qodef-information-section qodef-tab-container" id="tour-item-info-id">
    <div class="qodef-grid-row qodef-grid-large-gutter">
    <div class="qodef-grid-col-9">
     
      <html lang="en">

        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pricing</title>
          <link rel="stylesheet" href="./pricing.css">
          <script src="https://kit.fontawesome.com/66aa7c98b3.js" crossorigin="anonymous"></script>
        </head>
        
        <body>
          <div class="wrapper">
            <h3>Prices for Children - Dubai Tourist Visa + Medical Insurance (COVID)</h3>
            <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">14</span>
                  </div>
                </div>
              </div>
              <div>
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Ultimate">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
<h3>Prices for Dubai Tourist Visa + Medical Insurance (COVID)</h3>
            <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">14</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Ultimate">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div>
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>

<h3>Prices for Dubai Express Tourist Visa + Medical Insurance (COVID)</h3>
              <div class="table basic">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">30</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div class="table Premium">
              <div class="price-section">
                <div class="price-area">
                  <div class="inner-area">
                   
                    <span class="price">90</span>
                  </div>
                </div>
              </div>
              <div >
        
              </div>
              <div class="features">
                <li>
                  <span class="list-name">days Tourist Visa</span>
                  <span class="icon check">   </span>
                </li>
                <li>
                  <span class="list-name">Embassy fees</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                  <span class="list-name">Medical Insurance (COVID)</span>
                  <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
               
                <div class="btn"><button>AED 99*</button></div>
              </div>
            </div>
            <div >
              
            </div>
          </div>
        </body>
        
        </html>
        <div><h3>Pay online</h3></div>

<br>

<p>Enter your credit or debit card details to purchase a UAE tourist visa.</p>

<br>

<a style="float: left;"><img alt="Upload-Documents UAE visit visa" src="/SFImage/Images/upload-documents.png" data-displaymode="Original" title="Upload-Documents UAE visit visa"></a> 

<div><h3>Upload your documents</h3></div>

<br>

<p>Upload coloured copies of the front and back of your passport. Also, upload a photograph with white background</p>

<br>

<a style="float: left;"><img alt="Download UAE e-visa" src="/SFImage/Images/download-e-visa9ad403e413a06dce84b1ff000062a8f2.png" data-displaymode="Original" title="Download UAE e-visa"></a> 

<div><h3>Download your e-visa</h3></div>

<br>

<p>Keep track of your UAE visa status and get Dubai visa on mail.</p>

<br>

<p>We always do our best to give our customers the lowest price on UAE tourist visas.  But if you find a lower qualified price on 30, 90 or airport to airport visas, we'll be happy to match it. That's a Musafir.com guarantee. Visit your nearest <a href="https://www.musafir.com/About/Default.aspx#actionBarSection2" title="" class=""><strong>Musafir branch</strong></a> or call 600544405 for more information. <!-- You can even WhatsApp us on +971 6 513 9908. --></p>






<p class="fineprint" style="clear: both;">*Prices listed are inclusive of VAT charges.</p>


<p><span style="font-size: 14px; font-weight: bold;">How to track Dubai visa status,  validity online using your passport</span></p>

 <ol> 
<li>Visit <a href="https://smartservices.ica.gov.ae/echannels/web/client/default.html#/fileValidity" title="" class="">Smart Services ICA</a></li> 
<li>Select passport information</li> 
<li>Select either 'residency' or 'visa'</li> 
<li>Enter passport number and passport expiry date</li> 
<li>Enter nationality from the dropdown on the right. A corresponding number will appear on the box on the left.</li> 
<li>Select the captcha check box and click on search. The page will now display your Dubai visa details along with date of expiry.</li> 
</ol>
<br>
<p><span style="font-size: 14px; font-weight: bold;">What are the&nbsp;requirements for Dubai Visa?</span></p>

 <ol> <li>A copy of guarantor's passport's first, last and visa pages</li> <li>A copy of your Emirates ID</li> <li>A copy of each visitor's passport's first and last pages</li> 
<li>Each visitor's passport-size photograph, taken against a white background</li> <li>Each visitor's passport should have a minimum validity of 6 months</li> <li>If the visitor is your spouse, the same must be mentioned on your passport</li> <li>Additional cash deposit of up to AED 5,500 may be required for certain visitors (not applicable for family visas*).</li></ol>



       

    </div>
    <div class="qodef-grid-col-3">
      <div class="qodef-custom-nlf-sidearea">
        <h4 class="qodef-custom-nlf-title">Apply Online</h4><span class="qodef-custom-nlf-text"></span>
        <div class="qodef-grid-row qodef-grid-normal-gutter">
        <div><span class="wpcf7-form-control-wrap your-name">
          <!-- <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="" /> -->
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
              <option value="">Type of visa</option>
              <option value="10387,10483">14 day UAE Visa</option>
              <option value="10352,10483">30 day UAE Visa</option>
              <option value="10354,10484">90 day UAE Visa</option>
              <option value="10020">90 day UAE Visa - Multiple Entry</option>
              <option value="7758,10483">30 day UAE Express Visa</option>
              <option value="7763,10484">90 day UAE Express Visa</option>
              <option value="11162,11187">30 day UAE (Abu Dhabi) Tourist Visa</option>
              <option value="11163,11188">90 day UAE (Abu Dhabi) Tourist Visa</option>
          </select>
        </span></div>
        <div><span class="wpcf7-form-control-wrap your-email">
          <input type=""  value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"  placeholder="Nationality" />
        </span></div>
        <div><span class="wpcf7-form-control-wrap your-name">
          <!-- <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="" /> -->
          <label for="">Travelers:</label>
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
           <option value="1">1 adult</option>
           <option value="2">2 adults</option>
           <option value="3">3 adults</option>
           <option value="4">4 adults</option>
           <option value="5">5 adults</option>
           <option value="6">6 adults</option>
           <option value="7">7 adults</option>
           <option value="8">8 adults</option>
           <option value="9">9 adults</option>
          </select>
          <select name="Type of Visa" style="color: black;"  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" >
            
           
          <option value="0">0 children</option>
          <option value="1">1 child</option>
          <option value="2">2 children</option>
          <option value="3">3 children</option>
          <option value="4">4 children</option>
          <option value="5">5 children</option>
          <option value="6">6 children</option>
          <option value="7">7 children</option>
          <option value="8">8 children</option>
           </select>
        </span></div>
      </div>
      <input type="submit" value="Apply" class="wpcf7-form-control wpcf7-submit" />
    </div><div class="wpcf7-response-output" aria-hidden="true"></div>
  </form></div> </div>
    </div>
    </div>
    
    </div>
    </div>

  </div> 
  </div>
   
  <%- include ('./footer.ejs') %>