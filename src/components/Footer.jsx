export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 text-center text-xs py-4">
      <div className="w-1/2 mx-auto flex flex-col gap-4">
        <p>
          $7,500 Federal Tax Credit available for eligible buyers and subject to
          MSRP caps. Model 3 Rear-Wheel Drive not eligible.
        </p>
        <p>
          Starting price of Model 3 Rear-Wheel Drive before estimated savings is
          $38,990, excluding taxes and fees and is subject to change. Estimated
          savings includes $5,000 in gas savings estimated over five years.
        </p>
        <p>
          Monthly lease payment is $449 before estimated gas savings of $100 per
          month and based on purchase price of $44,990, excluding taxes and fees
          and is subject to change. Lease available in select states, requires
          $2,999 down and is subject to credit approval. No security deposit
          required. Additional terms and conditions apply.
        </p>
        <p>
          Price before estimated savings is $77,990, excluding taxes and fees.
          Subject to change. Estimated savings includes $6,500 in gas savings
          estimated over five years, the $7,500 Federal Tax Credit and state
          incentives, available to eligible buyers and subject to MSRP caps.
          Terms apply.
        </p>
        <p>
          Price before estimated savings is $72,990, excluding taxes and fees.
          Subject to change. Estimated savings includes $6,500 in gas savings
          estimated over five years and state incentives, available to eligible
          buyers and subject to MSRP caps. Terms apply.
        </p>
        <ul className="flex justify-center gap-4 mt-10">
          <li>Tesla © {new Date().getFullYear()}</li>
          <li>Privacy & Legal</li>
          <li>Vehicle Recalls</li>
          <li>Contact</li>
          <li>News</li>
          <li>Get Updates</li>
          <li>Locations</li>
        </ul>
      </div>
    </footer>
  );
}
