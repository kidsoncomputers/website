import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DonateButton(): JSX.Element {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <div className={styles.donateButton}>
        <input type="hidden" name="hosted_button_id" value="NDTYRRQFLDTGY" />
        <input type="image" src={useBaseUrl("img/logo.svg")} border="0" name="submit" title="Kids on Computers" alt="Donate with PayPal button" />
        <br />
        <input type="image" src="https://www.paypalobjects.com/marketing/web/PPGF/US/pp_giving_fund.svg" border="0" name="submit" title="PayPal Giving Fund" alt="Donate with PayPal button" />
        <br />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </div>
    </form>
  );
}
