import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
          style={{ height: '100%', width: '100%', border: 'none' }}
          srcDoc={`
          <div id="mc_embed_shell" style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <style type="text/css">
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
              background: #00EC97;
              font-family: Helvetica, Arial, sans-serif;
            }
            #mc_embed_signup {
              background: #00EC97;
              clear: left; 
              width: 600px;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
            }
            #mc_embed_signup h2 {
              font-size: 24px;
              margin-bottom: 20px;
            }
            #mc_embed_signup .mc-field-group {
              margin-bottom: 20px;
            }
            #mce-EMAIL {
              height: 25px;
              width: 300px;
              border: 1px solid #000000;
              border-radius: 5px;
            }
            #mc-embedded-subscribe {
              background-color: transparent;
              color: #000000;
              padding: 10px 20px;
              border: 2px solid #000000;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s, color 0.3s;
            }
            #mc-embedded-subscribe:hover {
              background-color: #000000;
              color: #FFFFFF;
            }
            </style>
            <div id="mc_embed_signup">
            <h2>/dev/hub newsletter</h2>
            <p>Stay in the loop. Get the latest updates, announcements, opportunities, and insights from the ecosystem in your inbox</p>
              <form action="https://neardevhub.us21.list-manage.com/subscribe/post?u=24aee19c18def43a73854f24d&amp;id=c38bf6663b&amp;f_id=0046e1e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
                <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                    <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                  </div>
                  <div hidden=""><input type="hidden" name="tags" value="2963845"></div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                  </div>
                  <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_24aee19c18def43a73854f24d_c38bf6663b" tabindex="-1" value=""></div>
                  <div class="clear">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                  </div>
                </div>
              </form>
            </div>
          </div>
          `}
      />
    </div>
  );
}
