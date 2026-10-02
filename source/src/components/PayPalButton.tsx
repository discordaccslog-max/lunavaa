import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_CLIENT_ID = "AVqcDAMvc1VSOhxkPYsR1FxFgTgY7K-h2qLF7HC12A82vtyEYTmNZacHR-YaSPWWfTtFUIbEDJ73Ac9y";
const PLAN_ID = "P-0U808468A0327913SNG3Y7NY";

let sdkLoaded = false;
let sdkLoadingPromise: Promise<void> | null = null;

const loadSdk = (): Promise<void> => {
  if (sdkLoaded && window.paypal) return Promise.resolve();
  if (sdkLoadingPromise) return sdkLoadingPromise;

  sdkLoadingPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.onload = () => {
      sdkLoaded = true;
      resolve();
    };
    document.body.appendChild(script);
  });

  return sdkLoadingPromise;
};

const PayPalCardButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;

    const renderButton = () => {
      if (window.paypal && containerRef.current && !renderedRef.current) {
        renderedRef.current = true;
        window.paypal.Buttons({
          fundingSource: window.paypal.FUNDING.CARD,
          style: {
            shape: "rect",
            color: "black",
            layout: "vertical",
            label: "pay",
          },
          createSubscription: function (_data: any, actions: any) {
            return actions.subscription.create({
              plan_id: PLAN_ID,
            });
          },
          onApprove: function (data: any) {
            alert(data.subscriptionID);
          },
        }).render(containerRef.current);
      }
    };

    loadSdk().then(renderButton);
  }, []);

  return <div ref={containerRef} />;
};

export default PayPalCardButton;
