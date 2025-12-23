# POST 1099 WITHHOLDINGS

The Withholding Posting (`AP_WTHD`) process, which is the process to post withholdings, combines the supplier’s voucher and payment information in the Withholding Transaction tables. The system then uses these tables to generate the 1099-NEC/MISC forms.

Before running this process, all payments must be posted (see **Chapter 3 – Posting Payments from 1099 Vouchers**).

## Running the Withholding Posting Process

Below are step by step instructions on how to post withholdings:

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Maintain** link.
6. Select the **Post Withholdings** link.
7. Select or Add a new **Run Control ID** for Post Withholdings.
8. Click on **Search**. The system navigates to the Post Withholdings page.
9. Navigate to **Post Option** and select “Post by Business Unit.”
   ![Extra Image from Page 34](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288125/p34_Select_Through_Date._This_is_usually_December_31_o_za5k8u.png)
10. Select **Through Date**. This is usually December 31 of the 1099 Withholding reporting year.
11. Select **Business Unit**. Remember to also select the B business unit if withholding payments were made from the B business unit.
12. Select **Save** and then select **Run**.
13. Select **Withholding Posting** (`AP_WTHD`) then click **OK** to run the process.
    ![Extra Image from Page 34](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288124/p34_1099_Processing__0AUser_Guide__0A__0AUse_the_Process_Mon_fv4wpk.png)
14. Use the **Process Monitor** to verify the process runs to **Success**.
15. Next, review the withholding supplier payments for accuracy and completeness. Proceed to the next step in processing Withholding - **Chapter 5: Review Withholding Payments**.
