# CHAPTER 3: 1099 TASKS THROUGHOUT THE YEAR

Though 1099 Withholding Processing is typically completed in January for the previous calendar year, users must complete certain tasks throughout the year. These include:

- Entering Withholding Suppliers
- Creating Withholding Vouchers
- Posting Withholding Vouchers

## Entering Withholding Suppliers

To report Withholding Information, users must set up each supplier in the system as a Withholding Supplier. Withholding information can be added to supplier information at any time, but it is recommended users add Withholding Information as they create a supplier in the system as this allows all subsequent vouchers entered for that supplier to be automatically flagged for withholding reporting.

> [!NOTE]
> For institutions utilizing SHARE suppliers, notify the Shared Services Center at `oneusgconnectsupport@usg.edu` if the withholding status or withholding class is incorrect on an existing supplier or to add a new withholding applicable SHARE supplier.

1. As users enter a Withholding Supplier into the system, most of the steps will be the same as entering any other supplier. For step by step instructions on how to enter a supplier in the system, see **SP.020.010 – Adding a Supplier**.
2. Below is a review of the fields used when entering Supplier Identifying Information:
   - **Supplier Short Name**
   - **Supplier Name 1**
   - **Additional Name** (if necessary)
   - **Supplier ID**: `NEXT`
   - **Persistence**: Set to “Regular” for a Withholding Supplier.
   - **Classification**: Choose “Federal” for corporate Suppliers. For individuals, choose “Individual/SoleProprietor.”
3. Also, newly created Suppliers save as “Unapproved” and must be approved by another authorized user. For more information on this process, see **SP.020.031 – Approving Suppliers**.
4. On the **Identifying Information** tab, select the **Withholding** checkbox. This turns on the Withholding flag in the system as shown below.
   ![Extra Image from Page 23](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288136/p23_1099_Processing__0AUser_Guide__0ARegents_of_the_Unive_vypslu.png)
5. Under the **Additional ID Numbers** group box, enter the **Tax Identification Number (TIN)**. At this point, it is helpful to check to see if there is a duplicate supplier in the system with the same name or TIN.
   ITS recommends users investigate to see if the Supplier already exists or if there is an incorrect name or TIN in the system. For more information on this process, see **SP.020.012 – Searching Suppliers Based on Criteria**.
   > [!WARNING]
   > If a duplicate Supplier exists, users receive a warning indicating a potential duplicate exists. However, this warning does not prevent users from adding this supplier into the system.
6. On the **Address** tab, enter the Supplier’s main address, Supplier’s email address and phone information. If an alternate payment/withholding name is needed to print on the supplier check and Copy B’s, navigate to the **Payment/Withholding Alt Names** group box and enter the alternate information.
   If information is entered into the Payment/Withholding Alt Names group box, the system generates payments for the location associated with this address and the system uses the alternate name information on the payment forms. Also, if users enter an alternate withholding name, the system uses this name on withholding reports instead of the name specified on the Identifying Information page.
   ![Extra Image from Page 25](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288135/p25_1099_Processing__0AUser_Guide___v2024.1_lj6zvi.png)
7. On the **Location** tab, enter a **MAIN** location as the default location. The Withholding Rules eventually associated with this supplier are stored under the Location.
   However, before entering the Withholding information, first save the Supplier. Once the supplier is saved, users receive a warning indicating the withholding information was not entered. Click **OK** to clear those warnings. After saving the Supplier, the next step is to add the withholding information for this Supplier by selecting the **1099** link as seen below.
   ![Extra Image from Page 26](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288132/p26_next_step_is_to_add_the_withholding_information_fo_sc50tc.png)
8. On the **Withholding Supplier Information** page, enter the following information for the Supplier under **1099 Information**:
   - **Entity**: `IRS`
   - **Type**: `1099M` or `1099N` (DO NOT CHOOSE ANY OTHER TYPE)
   - **Jurisdiction**: `FED`
   - **Default Jurisdiction**: Check this box. This box determines whether the Supplier Withholding information defaults to the voucher.
   - **Default Class**: Select the withholding class that will most often be used for the supplier.
     > [!NOTE]
     > A supplier can have multiple Classes set up but should only have one Class with the Default Jurisdiction check box selected.
   - **1099 Status**: This status should be “RPT.” GeorgiaFIRST institutions report Withholdings only.
9. For each Withholding class that applies to the Supplier, insert an additional row by clicking the plus (+) button.
   _For example, if the Supplier has a Withholding Voucher in which “non-employee compensation” (1099N Class 01) applies and another Withholding Voucher in which “Prizes and Awards” (1099M Class 01) applies, then users must have each type and class set up for that Supplier._
   ![Extra Image from Page 27](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288131/p27_1099_Processing__0AUser_Guide___v_0Aoard_of_Regents_of_y3lgni.png)
10. Under **1099 Reporting Information**, select the following:
    - **Entity**: `IRS`
    - **Address**: Supplier Address
    - **Taxpayer Identification Number**: Same number entered on the Identifying Information page
11. After entering withholding information, save the Supplier. Once the Supplier is approved through the approval process, users can create withholding vouchers for the Withholding Supplier.

## Entering 1099 Withholding Vouchers

Users enter Withholding Vouchers throughout the year. When doing so, the Supplier needs to be properly set up in the system as a Withholding Supplier. Withholding vouchers are the primary means of tracking reported withholdings to the IRS each calendar year.

Below are step by step instructions on how to add a Withholding Voucher.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Accounts Payable** link.
4. Select the **Vouchers** link.
5. Select the **Add/Update** link.
6. Select the **Regular Entry** link.
7. Click the **Add a New Value** tab.
8. On the Add a New Value tab, enter the **Supplier ID** and **Supplier Location**, along with the other fields, if needed.
9. Click the **Add** button. The system navigates to the Invoice Information tab.
10. On the **Invoice Information** tab, enter all information typically entered for a voucher.
11. When ready to verify or edit the withholding information for the voucher, select the **Withholding** link in the header. The system navigates to the to the Withholding Information page.
    > [!IMPORTANT]
    > If there is not a withholding link available, then the supplier was not properly set up in the system as a Withholding Supplier. Remember, the supplier needs to be flagged as a Withholding Supplier and have the withholding information set up for them.
    > ![Extra Image from Page 29](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288130/p30_Much_of_the_information_on_the_Withholding_page_co_rx1ppk.png)
12. Much of the information on the Withholding page comes from the supplier information entered when the supplier was created. For each voucher line, users can edit withholding information.
13. Select whether the voucher line is withholding applicable or not. The **Withholding Applicable** checkbox indicates the payment for the voucher line will be included on the 1099-NEC/MISC form issued for the Supplier. However, if users deselect the Withholding Applicable checkbox, the amount on that line will not be included on the 1099-NEC/MISC form.
14. Under **Withholding Details**, verify the following fields the Entity default to the categories listed below:
    - **Entity**: `IRS`
    - **Type**: `1099M` or `1099N` (DO NOT CHOOSE ANY OTHER TYPE)
    - **Jurisdiction**: `FED`
      Users can change the Class if needed to match the purpose of the voucher. However, if users change the Class on this page, the new Class must be added to the Withholding Supplier if it is not already there. Users can use the Applicable checkbox to deselect the corresponding Entity/Type/Class combination, if needed.
      ![Extra Image from Page 31](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288127/p31_Once_users_verify_and_edit_the_Withholding_Informa_erjebb.png)
15. Once users verify and edit the Withholding Information on the voucher, click the **Save** button.
16. Perform regular processing on all vouchers, including budget checking and posting.

## Posting Payments from Withholding Vouchers

Payments need to be posted before Withholding processing takes place. This is normally done as part of the nightly batch process but, if necessary, payments can be manually posted.

Below are step by step instructions on how to manually post payments.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Accounts Payable** link.
4. Select the **Batch Processes** link.
5. Select the **Payment** link.
6. Select the **Payment Posting** link. The system navigates to the Payment Posting Request Page.
7. Select or create **Run Control ID**.
8. When posting payments, users can choose one of the following Post Payment Options:
   - **Post Bank Account**: Posts all payments at the institution that are ready for posting.
   - **Post Payment**: Posts specific payment.
   - **Post Payment Method**: Posts specific payment method (i.e., ACH)
     > [!CAUTION]
     > Users should not select “Post All Banks.” Users will receive an error message if selected.
9. After completing the payment posting process, the accounting entries from these payments are available for General Ledger Journal Generation. For more information, see **GL.030.001 – Running Journal Generator**.
