import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { renderToString } from "react-dom/server";

const inter = Inter({ subsets: ["latin"] });

const Logo = () => {
  const Wrapper = styled.div`
    @media screen and (max-width: 768px) {
      svg {
        width: 90px;
        height: 12px;
        transform: scale(1.5);
        margin-left: 1rem;
      }
    }
  `;

  return (
    <Wrapper>
      <Link href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="24"
          viewBox="0 0 180 24"
          fill="none"
        >
          <g clip-path="url(#clip0_530_29)">
            <path
              d="M8.62185 6.09766C11.8428 6.09766 14.5995 7.77588 14.5995 12.7821V20.8888H10.508V13.1803C10.508 10.7057 9.55041 9.39721 7.49016 9.39721C5.37187 9.39721 4.15313 10.8763 4.15313 13.4079V20.8888H0.0616455V6.26832H3.63081L4.00804 8.08877C4.96563 6.95099 6.32945 6.09766 8.62185 6.09766ZM23.911 21.0594C18.9489 21.0594 15.9601 18.1297 15.9601 13.607C15.9601 9.05588 19.007 6.09766 23.6208 6.09766C28.0895 6.09766 31.1073 8.82832 31.1654 13.1234C31.1654 13.5501 31.1364 14.0337 31.0493 14.4888H20.2257V14.6879C20.3128 16.7643 21.6766 18.0159 23.7369 18.0159C25.3909 18.0159 26.5516 17.3048 26.8998 15.9394H30.9332C30.4689 18.7839 27.8864 21.0594 23.911 21.0594ZM20.3128 11.8719H27.0449C26.7547 10.0799 25.5069 9.08432 23.6498 9.08432C21.8797 9.08432 20.5449 10.1368 20.3128 11.8719ZM47.0396 17.5039H47.5039V20.8888H45.4146C43.2963 20.8888 42.6289 19.8932 42.6579 18.4994C41.6133 20.1208 40.1044 21.0594 37.783 21.0594C34.562 21.0594 32.2406 19.5519 32.2406 16.7643C32.2406 13.6639 34.6201 11.9003 39.0888 11.9003H42.0486V11.1892C42.0486 9.88077 41.091 9.02743 39.3789 9.02743C37.783 9.02743 36.7093 9.73854 36.5352 10.8194H32.5888C32.879 7.97499 35.5486 6.09766 39.495 6.09766C43.6736 6.09766 46.082 7.9181 46.082 11.4168V16.5937C46.082 17.3617 46.4012 17.5039 47.0396 17.5039ZM42.0486 14.8585V14.5741H39.0598C37.3477 14.5741 36.3611 15.2568 36.3611 16.4799C36.3611 17.5039 37.2026 18.1581 38.5665 18.1581C40.7138 18.1581 42.0196 16.8497 42.0486 14.8585ZM56.8924 6.26832H57.5889V9.90921H55.9639C53.5264 9.90921 52.5978 11.5021 52.5978 13.7208V20.8888H48.5064V6.26832H52.2206L52.5978 8.45854C53.4103 7.1501 54.571 6.26832 56.8924 6.26832Z"
              fill="#00EC97"
            />
            <path
              d="M60.7221 23.961H59.2422L67.4542 0.124512H68.9341L60.7221 23.961ZM82.8081 8.08896V0.977843H86.8996V20.889H83.3304L82.9242 18.8694C81.9376 20.121 80.4867 21.0596 78.3394 21.0596C74.335 21.0596 71.4042 18.1867 71.4042 13.5503C71.4042 9.02762 74.335 6.09785 78.3104 6.09785C80.3706 6.09785 81.8505 6.89429 82.8081 8.08896ZM79.239 17.7885C81.4733 17.7885 82.8662 16.0818 82.8662 13.6072C82.8662 11.1041 81.4733 9.36896 79.239 9.36896C77.0046 9.36896 75.5827 11.0756 75.5827 13.5787C75.5827 16.0818 77.0046 17.7885 79.239 17.7885ZM96.2521 21.0596C91.2901 21.0596 88.3013 18.1298 88.3013 13.6072C88.3013 9.05607 91.3482 6.09785 95.962 6.09785C100.431 6.09785 103.449 8.82851 103.507 13.1236C103.507 13.5503 103.478 14.0338 103.39 14.489H92.5669V14.6881C92.6539 16.7645 94.0178 18.0161 96.078 18.0161C97.732 18.0161 98.8927 17.305 99.2409 15.9396H103.274C102.81 18.7841 100.228 21.0596 96.2521 21.0596ZM92.6539 11.8721H99.386C99.0959 10.0801 97.8481 9.08451 95.991 9.08451C94.2209 9.08451 92.8861 10.137 92.6539 11.8721ZM108.081 20.889L102.713 6.26851H107.094L110.692 16.793L114.233 6.26851H118.527L113.159 20.889H108.081ZM120.906 23.961H119.427L127.639 0.124512H129.118L120.906 23.961ZM140.671 6.09785C143.979 6.09785 146.707 7.83296 146.707 12.7823V20.889H142.615V13.1236C142.615 10.7343 141.629 9.3974 139.597 9.3974C137.508 9.3974 136.26 10.8765 136.26 13.3796V20.889H132.169V0.977843H136.26V8.06051C137.218 6.92273 138.553 6.09785 140.671 6.09785ZM158.367 13.5787V6.26851H162.459V20.889H158.832L158.454 19.1254C157.497 20.2632 156.191 21.0596 154.073 21.0596C150.997 21.0596 148.153 19.5521 148.153 14.3752V6.26851H152.245V13.8347C152.245 16.4516 153.115 17.7316 155.146 17.7316C157.178 17.7316 158.367 16.281 158.367 13.5787ZM173.022 6.09785C177.027 6.09785 179.928 8.91385 179.928 13.5503C179.928 18.073 177.027 21.0596 172.993 21.0596C170.846 21.0596 169.366 20.1494 168.408 18.8978L168.002 20.889H164.433V0.977843H168.524V8.1174C169.511 6.95118 170.962 6.09785 173.022 6.09785ZM172.094 17.7885C174.328 17.7885 175.779 16.0818 175.779 13.5787C175.779 11.0756 174.328 9.36896 172.094 9.36896C169.859 9.36896 168.466 11.0756 168.466 13.5503C168.466 16.0534 169.859 17.7885 172.094 17.7885Z"
              fill="#151515"
            />
          </g>
          <defs>
            <clipPath id="clip0_530_29">
              <rect width="180" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </Wrapper>
  );
};

export default function Home() {
  const logoHtml = renderToString(<Logo />);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        style={{ height: "100%", width: "100%", border: "none" }}
        srcDoc={`
          <div id="mc_embed_shell" style="height: 100%; display: flex; flex-direction: column; justify-content: start; align-items: center;">
            <style type="text/css">
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
              background: white;
              font-family: Helvetica, Arial, sans-serif;
            }
            #header {
              width: 100%;
              //background-color: #000000;
              color: #FFFFFF;
              padding: 16px 16px;;
              text-align: center;
              font-size: 20px;
              //box-shadow: 0 3px 6px rgba(0,0,0,0.16);
              position: fixed;
              top: 0;
              left: 0;
              display: flex; /* Use flexbox layout */
  align-items: center; /* Vertically center the content */
  justify-content: flex-start; /
            }
            #banner-container {
              width: 100%;
              height: 350px; /* Set this to the desired visible height */
              overflow: hidden;
              position: relative;
              margin-top: 60px; /* Adjust this value to match the height of your header */
            }
            
            
            #banner {
              width: 100%;
              height: auto; /* This will maintain the aspect ratio */
              object-fit: cover;
              object-position: top; /* This will align the image to the top */
            }
            
#mc_embed_signup .mc-field-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#mc_embed_signup .mc-field-group label {
  margin-bottom: 5px;
}

#mce-EMAIL,
#mce-FNAME,
#mce-GITHUB,
#mce-NEARWALLET {
  height: 38px;
  width: 100%;
  max-width: 300px;
  border: 1.5px solid #ECECEC;
  padding: 0 5px;
}

#success-message {
                display: none;
                background-color: #00EC97;
                color: #000000;
                padding: 10px;
                margin-top: 20px;
                border-radius: 5px;
                text-align: center;
              }

@media screen and (max-width: 480px) {
  #mce-EMAIL,
  #mce-FNAME,
  #mce-GITHUB,
  #mce-NEARWALLET {
    width: 100%;
  }
}

#mc-embedded-subscribe {
  margin-top: 10px;
  height: 38px;
  width: 100%;
  max-width: 300px;
  background-color: #00EC97;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

#mc-embedded-subscribe:hover {
  background-color: #000000;
  color: #FFFFFF;
}
             #copy {
              font-size: 16px; /* Default font size for large screens */
              padding: 10px 0;
              /* Other styles */
              }

  @media screen and (max-width: 480px) {
    #copy {
      margin: 5px 5px;
      font-size: 14px; /* Smaller font size for tablets */
      padding: 5px 110px;
    }
  }
  @media screen and (max-width: 480px) {
    #banner {
      width: 100%;
      height: auto; /* This will maintain the aspect ratio */
      object-fit: cover;
      object-position: top; /* This will align the image to the top */
    }
  }
  @media screen and (max-width: 480px) {
    #banner-container {
    width: 100%;
    height: 250px; /* Set this to the desired visible height */
    overflow: hidden;
    position: relative;
    margin-top: 60px; /*
    }
  }


            </style>
            <div id="header">${logoHtml}</div>
            <div id="banner-container">
            <img id="banner" src="/banner.png" alt="Banner" />
            </div>

            
            <div id="mc_embed_signup">
            <h2>NEAR DevHub newsletter</h2>
            <p id="copy">Stay in the loop. Get the latest updates, announcements,<br /> opportunities, and insights from the developer ecosystem<br />in your inbox</p>
              <form action="https://one.us21.list-manage.com/subscribe/post?u=24aee19c18def43a73854f24d&amp;id=c5e9e2df3c&amp;f_id=00d3fbe6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><br /><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><br /><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-GITHUB">Github Username </label><br /><input type="text" name="GITHUB" class=" text" id="mce-GITHUB" value=""></div><div class="mc-field-group"><label for="mce-NEARWALLET">NEAR Wallet Address </label><br /><input type="text" name="NEARWALLET" class=" text" id="mce-NEARWALLET" value=""></div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_24aee19c18def43a73854f24d_c5e9e2df3c" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
    <div id="success-message">Thank you for subscribing to our newsletter!</div>
    </div>
</form><script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[5]='GITHUB';ftypes[5]='text';fnames[6]='NEARWALLET';ftypes[6]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
            </div>
          </div>
          <script type="text/javascript">
            (function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[5]='GITHUB';ftypes[5]='text';fnames[6]='NEARWALLET';ftypes[6]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';
              
              // Add event listener for form submission
              document.getElementById('mc-embedded-subscribe-form').addEventListener('submit', function(e) {
                e.preventDefault();
                var form = this;
                var url = form.action.replace('/post?', '/post-json?');
                var data = '';
                var inputs = form.querySelectorAll('input');
                inputs.forEach(function(input) {
                  data += '&' + input.name + '=' + encodeURIComponent(input.value);
                });
                
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url + data);
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.result === 'success') {
                      document.getElementById('success-message').style.display = 'block';
                      form.style.display = 'none';
                    } else {
                      // Handle error
                      console.error('Subscription failed:', response.msg);
                    }
                  }
                };
                xhr.send();
              });
            })(jQuery);
          </script>
          `}
      />
    </div>
  );
}
