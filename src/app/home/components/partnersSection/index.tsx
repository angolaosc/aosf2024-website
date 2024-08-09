import styles from './styles.module.css';

const PartnersSection = () => {
  const { container, sponsors, tpatrocinio, barra, platinum, gold, silver, logo } = styles;

  return (
    <div className={container} id="partnersSection">
      <div className={sponsors}>
        <div className={platinum}>
          <h3 className={tpatrocinio}>Platinum</h3>
          <div className={logo}>
            <svg width="102" height="37" viewBox="0 0 142 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_122)">
                <path
                  d="M0 28.5C0 12.7609 12.7826 3.79092e-05 28.5485 3.79092e-05C44.3145 3.79092e-05 57.0971 12.7609 57.0971 28.5V56.1854C57.0971 56.6366 56.733 57 56.281 57H41.5999C41.3835 57 41.176 56.9141 41.0229 56.7613C40.8698 56.6086 40.7839 56.4014 40.7839 56.1854V28.5C40.7839 26.0842 40.0663 23.7227 38.7219 21.7139C37.3774 19.7053 35.4665 18.1396 33.2307 17.2151C30.9951 16.2907 28.5349 16.0488 26.1615 16.5201C23.7881 16.9915 21.6079 18.1547 19.8968 19.863C18.1856 21.5712 17.0203 23.7477 16.5482 26.117C16.0761 28.4865 16.3184 30.9425 17.2444 33.1744C18.1705 35.4063 19.7387 37.3139 21.7509 38.656C23.763 39.9983 26.1286 40.7146 28.5485 40.7146H37.9291C38.3811 40.7146 38.7451 41.078 38.7451 41.5292V56.1854C38.7451 56.6366 38.3787 57 37.9291 57H28.5485C12.7826 57 0 44.2391 0 28.5ZM102.166 5.20365C102.594 4.84266 102.561 4.1634 102.078 3.88078C97.7113 1.33147 92.7426 -0.00821589 87.6844 3.79092e-05C71.9185 3.79092e-05 59.1359 12.7609 59.1359 28.5V56.1854C59.1359 56.6366 59.5022 57 59.9519 57H74.633C75.085 57 75.449 56.6366 75.449 56.1854V28.5C75.4485 26.4782 75.9507 24.4879 76.9106 22.7076C77.8704 20.9273 79.258 19.4127 80.9487 18.2997C82.6395 17.1867 84.5806 16.5102 86.5978 16.3306C88.6151 16.1511 90.6453 16.4741 92.5066 17.271C92.6135 17.3178 92.7285 17.3431 92.8451 17.3453C92.9618 17.3477 93.0776 17.3269 93.1863 17.2843C93.2947 17.2418 93.3938 17.1781 93.4777 17.0972C93.5616 17.0162 93.6286 16.9196 93.6748 16.8126C95.5428 12.3249 98.4541 8.34554 102.168 5.20365H102.166ZM121.943 3.79092e-05C129.337 -0.0100749 136.445 2.85372 141.76 7.98478C142.081 8.29353 142.078 8.80653 141.76 9.1224L131.387 19.4798C131.228 19.6334 131.016 19.72 130.794 19.7213C130.573 19.7226 130.358 19.6386 130.198 19.4869C128.48 17.9189 126.35 16.8726 124.058 16.4706C121.766 16.0687 119.406 16.3278 117.256 17.2176C115.106 18.1073 113.254 19.5908 111.919 21.494C110.584 23.3971 109.82 25.6411 109.718 27.9623C109.615 30.2836 110.178 32.5859 111.34 34.5991C112.502 36.6123 114.215 38.2529 116.278 39.3285C118.341 40.404 120.669 40.8696 122.988 40.671C125.306 40.4722 127.521 39.6174 129.369 38.2066C129.533 38.078 129.737 38.0128 129.945 38.0233C130.152 38.0339 130.349 38.1192 130.498 38.2636L140.913 48.6614C140.991 48.7374 141.052 48.8284 141.093 48.9289C141.134 49.0295 141.154 49.1373 141.152 49.246C141.15 49.3546 141.126 49.4615 141.081 49.5603C141.035 49.6591 140.97 49.7476 140.889 49.8204C135.671 54.4548 128.927 57.0104 121.943 57C106.177 57 93.394 44.2391 93.394 28.5C93.394 12.7609 106.177 3.79092e-05 121.943 3.79092e-05Z"
                  fill="#0D161B"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_122">
                  <rect width="142" height="57" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg width="221" height="40" viewBox="0 0 221 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_124)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1948 46.3396C27.7652 46.3396 33.1191 41.0427 33.1191 33.4287C33.1191 26.743 28.7704 22.1722 23.1456 20.8515C27.0951 19.3311 29.9039 16.0857 29.9039 11.3857C29.9039 5.29925 25.2938 0 15.8573 0H0V46.3396H16.1948ZM7.35716 18.8V6.42255H15.2514C20.0706 6.42255 22.6109 8.67385 22.6109 12.3798C22.6109 16.1516 20.0017 18.8 15.1825 18.8H7.35716ZM25.7548 32.3054C25.7548 27.737 22.8082 24.494 15.7837 24.494H7.35716V39.9171H15.8573C22.8153 39.9171 25.7548 37.0054 25.7548 32.3054ZM70.3826 31.7743H42.8764C43.9505 37.8608 48.7697 40.9111 54.3161 40.9111C58.9333 40.9111 61.4047 39.7197 63.9522 37.7316L68.0324 41.5715C64.9574 45.0189 60.5397 47 54.1189 47C45.3573 47 35.783 41.1085 35.783 29.1917C35.783 17.2067 45.6211 11.2565 53.444 11.2565C61.3453 11.2565 72.0531 17.2091 70.3802 31.772L70.3826 31.7743ZM42.9477 26.4751H63.8904C63.225 20.3886 57.9376 17.4041 53.4582 17.4041C49.0382 17.4111 44.0836 20.3886 42.9477 26.4751ZM90.1751 11.2494C82.3498 11.2494 72.9157 17.0774 72.9157 29.1259C72.9157 41.172 82.3498 47 90.1751 47C96.1992 47 100.348 43.5549 101.753 40.709H102.152V46.3326H109.378V11.9098H102.152V17.5357H101.753C100.348 14.6898 96.1992 11.2494 90.1751 11.2494ZM91.1138 17.6085C96.5295 17.6085 102.354 21.4437 102.354 29.1235C102.354 36.808 96.5342 40.6456 91.1138 40.6385C85.6957 40.6385 79.9426 36.801 79.9426 29.1235C79.9426 21.4508 85.6957 17.6085 91.1138 17.6085ZM140.618 22.1041L146.24 19.5896C143.096 14.0342 137.678 11.2565 131.383 11.2494C123.489 11.2494 113.385 17.202 113.385 29.187C113.385 41.1649 123.489 46.9953 131.383 46.9953C137.742 46.9953 143.092 44.2834 146.304 38.7209L140.618 36.2064C138.541 38.9865 135.732 40.6409 131.452 40.6409C126.303 40.6409 120.412 36.801 120.412 29.187C120.412 21.4437 126.305 17.6038 131.452 17.6038C135.732 17.6038 138.548 19.3264 140.618 22.1041ZM166.038 47C173.998 47 184.103 41.172 184.103 29.1917C184.103 17.2067 174.001 11.2565 166.038 11.2565C158.074 11.2565 147.97 17.209 147.97 29.1917C147.97 41.172 158.074 47 166.038 47ZM166.042 40.6456C160.895 40.6456 155.004 36.8057 155.004 29.194C155.004 21.4508 160.888 17.6085 166.042 17.6085C171.199 17.6085 177.083 21.4508 177.083 29.194C177.083 36.808 171.197 40.6456 166.042 40.6456ZM220.361 46.3396V26.414C220.361 15.6886 213.809 11.2565 207.317 11.2565C199.76 11.2565 196.01 17.0774 195.34 19.0655V11.9169H188.116V46.3326H195.34V25.7466C195.673 22.8396 198.888 17.5427 204.841 17.5427C209.254 17.5427 213.134 20.2593 213.134 26.8088V46.3373L220.361 46.3396Z"
                  fill="#0C151A"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_124">
                  <rect width="221" height="47" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={gold}>
          <h3 className={tpatrocinio}>Gold</h3>
          <div className={logo}>
            <svg width="63" height="57" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M58.5799 54.2577C58.1053 57.7465 55.7293 60.7633 52.4042 62.1044C50.7749 62.7734 49.0095 62.9766 47.2441 62.7734C45.5483 62.5733 43.8494 62.0356 42.0872 61.0321C39.6447 59.6879 37.1992 57.6121 34.3486 54.5266C38.8285 49.0933 41.543 44.1321 42.5617 39.7054C43.0363 37.6265 43.1059 35.7477 42.9003 34.0033C42.6282 32.3277 42.0176 30.7834 41.0684 29.4422C38.9645 26.4255 35.4338 24.6811 31.4981 24.6811C27.5623 24.6811 24.0316 26.4911 21.9277 29.4422C20.9785 30.7834 20.3679 32.3277 20.0959 34.0033C19.8238 35.7477 19.8934 37.6922 20.4344 39.7054C21.4531 44.1321 24.2341 49.1621 28.6475 54.5922C25.8634 57.6778 23.3545 59.7567 20.9089 61.0978C19.1436 62.1044 17.4478 62.6421 15.752 62.8422C14.0025 63.036 12.2339 62.8047 10.5951 62.1732C7.26997 60.8321 4.89399 57.8122 4.41942 54.3265C4.21694 52.6509 4.35298 50.9753 5.03003 49.0964C5.23251 48.4243 5.57419 47.7553 5.91272 46.9519C6.38728 45.8796 6.93145 44.7386 7.47245 43.5975L7.54205 43.4631C12.2244 33.4687 17.2485 23.2743 22.475 13.3487L22.6775 12.9455C23.2217 11.942 23.7627 10.8666 24.3068 9.85993C24.851 8.78765 25.4616 7.78103 26.2083 6.90883C27.6351 5.29885 29.5334 4.42665 31.6373 4.42665C33.7412 4.42665 35.6426 5.29885 37.0663 6.90883C37.8129 7.78103 38.4235 8.78765 38.9677 9.85993C39.5119 10.8666 40.0529 11.9388 40.597 12.9423L40.8027 13.3456C45.9596 23.3368 50.9837 33.5313 55.666 43.5256V43.5913C56.2102 44.6635 56.6848 45.8734 57.2258 46.9456C57.5643 47.7522 57.906 48.4212 58.1085 49.0902C58.6495 50.8377 58.8519 52.5133 58.5799 54.2577ZM31.4981 51.1034C27.8344 46.5424 25.4584 42.2501 24.6422 38.63C24.3037 37.0857 24.2341 35.7446 24.4397 34.5379C24.5757 33.4656 24.9839 32.5246 25.5249 31.7212C26.8157 29.9112 28.986 28.7701 31.4981 28.7701C34.0101 28.7701 36.25 29.8455 37.4712 31.7212C38.0154 32.5278 38.4204 33.4656 38.5564 34.5379C38.7589 35.7446 38.6925 37.1545 38.3539 38.63C37.5408 42.1845 35.1649 46.4767 31.4981 51.1034ZM62.1106 47.6178C61.7721 46.8143 61.4304 45.9421 61.0919 45.2044C60.5477 43.9977 60.0067 42.8566 59.529 41.7843L59.4626 41.7187C54.7802 31.6587 49.7561 21.4643 44.4632 11.4043L44.2607 11.001C43.7165 9.99435 43.1755 8.92208 42.6313 7.8498C41.9511 6.6431 41.2741 5.36763 40.1889 4.16093C38.0154 1.47555 34.8928 0 31.5677 0C28.1729 0 25.1199 1.47555 22.8768 4.02338C21.8581 5.23008 21.1114 6.50555 20.4344 7.71225C19.8902 8.78453 19.3492 9.8568 18.805 10.8634L18.6026 11.2636C13.376 21.3236 8.28554 31.518 3.60317 41.578L3.53673 41.7124C3.06217 42.7847 2.518 43.9258 1.97383 45.1325C1.61 45.9265 1.27148 46.7331 0.955102 47.5459C0.0724124 50.028 -0.199671 52.3758 0.138851 54.7892C0.885499 59.8192 4.28022 64.0458 8.96258 65.9215C10.728 66.6592 12.5598 66.9937 14.4612 66.9937C15.0054 66.9937 15.6824 66.9281 16.2266 66.8593C18.4665 66.5905 20.7729 65.8558 23.0129 64.5803C25.797 63.0391 28.4419 60.8258 31.4285 57.6059C34.4151 60.8258 37.1296 63.0391 39.8441 64.5803C42.084 65.8558 44.3904 66.5905 46.6303 66.8593C47.1745 66.9281 47.8515 66.9937 48.3957 66.9937C50.2971 66.9937 52.1954 66.6592 53.8943 65.9215C58.6463 64.0426 61.9714 59.7504 62.7181 54.7892C63.2622 52.4446 62.9901 50.0999 62.1106 47.6178Z"
                fill="#0D161B"
              />
            </svg>
          </div>
        </div>
        <div className={silver}>
          <h3 className={tpatrocinio}>Silver</h3>
          <div className={logo}>
            <svg width="66" height="56" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_129)">
                <path
                  d="M19.5937 30.4219C18.5625 29.3906 17.0156 29.3906 16.2422 30.6797L0.257804 63.1641C0.129939 63.4328 0.070526 63.729 0.0848574 64.0263C0.0991888 64.3236 0.18682 64.6127 0.339945 64.8679C0.49307 65.1231 0.706936 65.3365 0.962494 65.489C1.21805 65.6416 1.50737 65.7285 1.80468 65.7422H24.4922C25.2656 65.7422 25.7812 65.4844 26.0391 64.7109C30.9375 54.6563 28.1016 39.4453 19.5937 30.4219Z"
                  fill="#0D161B"
                />
                <path
                  d="M31.4531 1.03125C22.4297 15.4687 22.9453 31.1953 28.875 43.0547L39.7031 64.7109C39.9609 65.4844 40.7344 65.7422 41.5078 65.7422H63.9375C64.2563 65.7738 64.5779 65.72 64.8691 65.5863C65.1602 65.4526 65.4106 65.2437 65.5943 64.9812C65.7781 64.7187 65.8886 64.412 65.9146 64.0927C65.9406 63.7733 65.8811 63.4528 65.7422 63.164L34.5469 1.03125C34.0312 -0.257812 32.2266 -0.257812 31.4531 1.03125Z"
                  fill="#0D161B"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_129">
                  <rect width="66" height="66" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={barra}>
        <hr />
        <h3 >Patrocinadores</h3>
        <hr />
      </div>
    </div>
  );
};

export default PartnersSection;
