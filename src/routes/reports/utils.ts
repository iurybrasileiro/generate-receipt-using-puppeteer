export const getReceiptHtmlContent = () => {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <title>Recibo de Venda</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box !important;
            print-color-adjust: exact !important;
            font-family: "Poppins", sans-serif;
          }
          
          html, body {
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        </style>
      </head>
      <body style="width: 100%; height: 100%; font-family: 'Poppins', sans-serif; background-color: #FFFFFF;">
        <div style="width: 100%; height: 100%;">
            
          <!-- Receipt Container -->
          <div style="display: flex; flex-direction: column; background-color: #FFFFFF; width: 100%;">
            <!-- Header -->
            <div style="margin-bottom: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px; background-color: #F8F8F8; padding: 29px 0px 12px 0px;">
              <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7855 18.3973C15.7855 19.1497 15.1541 19.7597 14.3751 19.7597H13.3925C12.9189 19.7597 12.4769 19.5301 12.2158 19.1485L3.15158 5.9012V18.3973C3.15158 19.1497 2.52009 19.7597 1.7411 19.7597H1.41048C0.631495 19.7597 0 19.1497 0 18.3973V2.53726C0 1.78485 0.631494 1.1749 1.41048 1.1749H2.39388C2.86704 1.1749 3.30868 1.40405 3.56991 1.7851L12.634 15.0067V2.53726C12.634 1.78485 13.2655 1.1749 14.0445 1.1749H14.3751C15.1541 1.1749 15.7855 1.78485 15.7855 2.53726V18.3973Z" fill="#7800A2"/>
                <path d="M18.0273 12.3364C18.0273 10.8589 18.3407 9.55051 18.9673 8.41121C19.6123 7.27192 20.4786 6.39074 21.566 5.76769C22.6718 5.12683 23.8882 4.80641 25.2152 4.80641C26.4131 4.80641 27.4544 5.03783 28.3391 5.50067C29.2422 5.9457 29.961 6.50645 30.4954 7.18291V6.40909C30.4954 5.65668 31.1269 5.04673 31.9059 5.04673H32.2642C33.0432 5.04673 33.6747 5.65668 33.6747 6.40909V18.3973C33.6747 19.1497 33.0432 19.7597 32.2642 19.7597H31.9059C31.1269 19.7597 30.4954 19.1497 30.4954 18.3973V17.5701C29.961 18.2643 29.233 18.8429 28.3114 19.3057C27.3899 19.7686 26.3394 20 25.1599 20C23.8513 20 22.6533 19.6796 21.566 19.0387C20.4786 18.3801 19.6123 17.4722 18.9673 16.3151C18.3407 15.1402 18.0273 13.814 18.0273 12.3364ZM30.4954 12.3899C30.4954 11.3752 30.2743 10.494 29.8319 9.74633C29.4081 8.99866 28.8459 8.42902 28.1456 8.03738C27.4452 7.64575 26.6896 7.44993 25.8786 7.44993C25.0677 7.44993 24.3121 7.64575 23.6117 8.03738C22.9114 8.41121 22.34 8.97196 21.8977 9.71963C21.4738 10.4495 21.2619 11.3218 21.2619 12.3364C21.2619 13.3511 21.4738 14.2412 21.8977 15.0067C22.34 15.7721 22.9114 16.3596 23.6117 16.769C24.3305 17.1607 25.0861 17.3565 25.8786 17.3565C26.6896 17.3565 27.4452 17.1607 28.1456 16.769C28.8459 16.3774 29.4081 15.8077 29.8319 15.0601C30.2743 14.2946 30.4954 13.4045 30.4954 12.3899Z" fill="#7800A2"/>
                <path d="M52.6094 19.7597C52.1048 19.7597 51.6387 19.4993 51.3869 19.0769L47.3705 12.3364H44.9654V18.3973C44.9654 19.1497 44.3339 19.7597 43.5549 19.7597H43.2243C42.4453 19.7597 41.8138 19.1497 41.8138 18.3973V2.56396C41.8138 1.81155 42.4453 1.2016 43.2243 1.2016H48.4487C49.9231 1.2016 51.1672 1.45082 52.1808 1.94926C53.2129 2.44771 53.9778 3.11526 54.4754 3.95194C54.9915 4.78861 55.2495 5.72319 55.2495 6.75567C55.2495 7.96618 54.8809 9.06987 54.1437 10.0668C53.4249 11.0458 52.3098 11.7134 50.7986 12.0694L54.2793 17.6988C54.8408 18.6069 54.1634 19.7597 53.0683 19.7597H52.6094ZM44.9654 9.90654H48.4487C49.6282 9.90654 50.5129 9.62172 51.1027 9.05207C51.7109 8.48242 52.015 7.71695 52.015 6.75567C52.015 5.79439 51.7201 5.04673 51.1303 4.51268C50.5405 3.96083 49.6467 3.68491 48.4487 3.68491H44.9654V9.90654Z" fill="#7800A2"/>
                <path d="M71.2674 12.0427C71.2674 12.158 71.2658 12.271 71.2626 12.3817C71.2432 13.0507 70.6471 13.538 69.9541 13.538H59.5181C59.6103 14.7129 60.0618 15.6564 60.8728 16.3685C61.6837 17.0806 62.6789 17.4366 63.8585 17.4366C65.2262 17.4366 66.2702 16.9906 66.9903 16.0987C67.3205 15.6898 67.7923 15.3805 68.3292 15.3805H68.904C69.8643 15.3805 70.5391 16.2988 69.9982 17.0653C69.5582 17.6886 69.0045 18.2396 68.337 18.7183C67.1391 19.5728 65.6462 20 63.8585 20C62.4025 20 61.0939 19.6885 59.9328 19.0654C58.7901 18.4246 57.8871 17.5345 57.2236 16.3952C56.5785 15.2381 56.256 13.903 56.256 12.3899C56.256 10.8767 56.5693 9.55051 57.1959 8.41121C57.841 7.25412 58.7349 6.36404 59.8775 5.74099C61.0386 5.11793 62.3656 4.80641 63.8585 4.80641C65.296 4.80641 66.5769 5.10903 67.7012 5.71428C68.8254 6.31954 69.7009 7.17401 70.3275 8.2777C70.9541 9.3636 71.2674 10.6186 71.2674 12.0427ZM67.9776 11.0814C67.9592 9.95995 67.5445 9.06097 66.7336 8.38451C65.9227 7.70805 64.9182 7.36983 63.7202 7.36983C62.6329 7.36983 61.7021 7.70805 60.9281 8.38451C60.154 9.04317 59.6932 9.94214 59.5458 11.0814H67.9776Z" fill="#7800A2"/>
                <path d="M73.0363 12.3364C73.0363 10.8589 73.3496 9.55051 73.9762 8.41121C74.6213 7.27192 75.4875 6.39074 76.5749 5.76769C77.6807 5.12683 78.8971 4.80641 80.2241 4.80641C81.4221 4.80641 82.4634 5.03783 83.348 5.50067C84.2511 5.9457 84.9699 6.50645 85.5044 7.18291V6.40909C85.5044 5.65668 86.1359 5.04673 86.9149 5.04673H87.2731C88.0521 5.04673 88.6836 5.65668 88.6836 6.40909V18.3973C88.6836 19.1497 88.0521 19.7597 87.2731 19.7597H86.9149C86.1359 19.7597 85.5044 19.1497 85.5044 18.3973V17.5701C84.9699 18.2643 84.2419 18.8429 83.3204 19.3057C82.3989 19.7686 81.3484 20 80.1688 20C78.8603 20 77.6623 19.6796 76.5749 19.0387C75.4875 18.3801 74.6213 17.4722 73.9762 16.3151C73.3496 15.1402 73.0363 13.814 73.0363 12.3364ZM85.5044 12.3899C85.5044 11.3752 85.2832 10.494 84.8409 9.74633C84.417 8.99866 83.8549 8.42902 83.1545 8.03738C82.4542 7.64575 81.6985 7.44993 80.8876 7.44993C80.0767 7.44993 79.321 7.64575 78.6207 8.03738C77.9203 8.41121 77.349 8.97196 76.9067 9.71963C76.4828 10.4495 76.2708 11.3218 76.2708 12.3364C76.2708 13.3511 76.4828 14.2412 76.9067 15.0067C77.349 15.7721 77.9203 16.3596 78.6207 16.769C79.3395 17.1607 80.0951 17.3565 80.8876 17.3565C81.6985 17.3565 82.4542 17.1607 83.1545 16.769C83.8549 16.3774 84.417 15.8077 84.8409 15.0601C85.2832 14.2946 85.5044 13.4045 85.5044 12.3899Z" fill="#7800A2"/>
                <path d="M92.5895 0C93.3685 0 94 0.60995 94 1.36236V18.3973C94 19.1497 93.3685 19.7597 92.5895 19.7597H92.2589C91.4799 19.7597 90.8484 19.1497 90.8484 18.3973V1.36236C90.8484 0.609949 91.4799 0 92.2589 0H92.5895Z" fill="#7800A2"/>
              </svg>
              <h2 style="font-size: 12px; color: #545454;">Feito pra quem faz o próprio negócio acontecer.</h2>
              
              <a style="color: #7800A2; font-size: 12px; font-weight: 400; text-decoration: underline;" href="https://www.nareal.app.br?utm_source=app-receipt&utm_medium=user-referral&utm_campaign=customer-acquisition&utm_content=ACC-SINV-2025-00375">Descubra mais aqui</a>
            </div>

            <div style="padding: 0px 16px;">
              <h3 style="margin: 8px 0px; color: #252525; font-size: 12px; font-weight: 600; text-transform: uppercase;">Aggera Technologies - Recibo de venda</h3>
                
              <!-- Created at -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Realizada em</div>
                <div style="color: #545454; font-size: 14px; font-weight: 700;">${new Date().toLocaleDateString('pt-BR')}</div>
              </div>
              
              <!-- Products amount -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Valor total dos produtos</div>
                <div style="color: #545454; font-size: 14px; font-weight: 700;">R$ 100,00</div>
              </div>
              
              <!-- Discount -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Desconto aplicado</div>
                <div style="color: #545454; font-size: 14px; font-weight: 700;">0 %</div>
              </div>
              
              <!-- Receipt amount -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Valor final da venda</div>
                <div style="color: #545454; font-size: 14px; font-weight: 700;">R$ 100,00</div>
              </div>
              
              <!-- Payment method -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Forma de pagamento</div>
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <div style="color: #545454; font-size: 14px; font-weight: 700;">PIX</div>
                  
                  <div style="padding: 4px 8px; border-radius: 100px; background-color: #247A35; margin-left: 8px;">
                    <div style="color: #FFFFFF; font-size: 8px; font-weight: 700;">Confirmado</div>
                  </div>
                </div>
              </div>
              
              <!-- Client -->
              <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px;">
                <div style="color: #545454; font-size: 12px; font-weight: 400;">Cliente</div>
                <div style="color: #545454; font-size: 14px; font-weight: 700;">Cliente 1</div>
              </div>
              
              <!-- Products -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <h2 style="margin: 0; font-size: 12px; font-weight: 600; color: #545454;">Lista de produtos</h2>
                
                <!-- Product Item -->
                <div style="border-radius: 8px; background-color: #FAFAFA; display: flex; flex-direction: row; align-items: center; gap: 16px; min-height: 73px; padding: 16px;">
                  <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <div style="font-size: 14px; font-weight: 500; color: #252525; margin-bottom: 4px;overflow: hidden;">Produto 1</div>
                    
                    <div style="display: flex; flex-direction: row; gap: 12px; margin-top: 8px;">
                      <div style="display: flex; flex-direction: column;">
                        <div style="font-size: 10px; color: #656565;">Preço unid</div>
                        <div style="font-size: 12px; font-weight: 600; color: #656565;">R$ 100,00</div>
                      </div>
                      
                      <div style="display: flex; flex-direction: column;">
                        <div style="font-size: 10px; color: #656565;">Quant.</div>
                        <div style="font-size: 12px; font-weight: 600; color: #656565;">1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
            
        </div>
      </body>
    </html>
  `
}