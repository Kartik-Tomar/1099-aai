# APPENDIX A: WEBSITE LINKS

- **IRS website**: [www.irs.gov](http://www.irs.gov)
- **Instructions for Forms 1099-MISC and 1099-NEC (2022)**
  - Publication: [https://www.irs.gov/pub/irs-pdf/i1099mec.pdf](https://www.irs.gov/pub/irs-pdf/i1099mec.pdf)
  - Website: [https://www.irs.gov/instructions/i1099mec](https://www.irs.gov/instructions/i1099mec)
- **General Instructions for Certain Information Returns**
  - Publication: [https://www.irs.gov/pub/irs-pdf/i1099gi.pdf](https://www.irs.gov/pub/irs-pdf/i1099gi.pdf)
  - Website: [https://www.irs.gov/instructions/i1099gi](https://www.irs.gov/instructions/i1099gi)
- **IRS FIRE Information – Filing Information Returns Electronically**
  - Website: [https://www.irs.gov/e-file-providers/filing-information-returns-electronically-fire](https://www.irs.gov/e-file-providers/filing-information-returns-electronically-fire)
  - Website: [https://fire.irs.gov/](https://fire.irs.gov/)

# APPENDIX B: REVIEWING ANNUAL CALENDAR AND TYPES SETUP

The Annual Calendar and Withholding Types are setup by ITS. However, the setup process is provided here for informational purposes only.

## Reviewing the A1 Annual Calendar (Not Required by Institution)

Users do not need to setup A1 calendar or the Withholding types as these were previously setup. If users would like to review previous year’s setup by Shared Services, run the Detail Calendar Report.

Below are step by step instructions on how to run the Detail Calendar Report.

1.  Click the **NavBar** icon.
2.  Click the **Menu** icon.
3.  Click the **Set Up Financials/Supply Chain** link.
4.  Click the **Common Definitions** link.
5.  Click the **Calendars/Schedules** link.
6.  Click the **Detail Calendar Report** link. The system navigates to the Detail Calendar Report page.
7.  Click the **Find/Add an Existing Value** link.
8.  Enter “SHARE” into the **SetID** field on the Detail Calendar Report Page.
9.  Enter “A1” into the **Calendar** field.
10. Enter the 1099 Calendar Year (e.g., 2023)
11. Click the **Save** button.
12. Click **Run**.
13. Run the `XMLP: Detail Calendars Report (FSX0002)`
    ![Run the XMLP: Detail Calendars Report (FSX0002) example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288099/p83_Click_OK.__0AAfter_the_process_completes__navigate_t_sdfgog.png)
14. Click **OK**.
15. After the process completes, navigate to the report manager to view the `FSX0002-FSX0002.pdf`.
    ![navigate to the report manager example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288099/p83_Example_below_ikj3z8.png)
    Example below:
    ![FSX0002-FSX0002.pdf view example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288098/p83_Example_below_1_fnxxgl.png)

## Reviewing Withholding Types Report (Optional)

The Withholding Types Report is maintained by ITS and lists the Class and Description for each Withholding Type. Withholding Types are created and maintained under the SHARE SetID.

Below are step by step instructions on how to run the Types Report to review Withholding Types.

1.  Click the **NavBar** icon.
2.  Click the **Menu** icon.
3.  Click the **Set Up Financials/Supply Chain** link.
4.  Click the **Product Related** link.
5.  Click the **Procurement Options** link.
6.  Click the **Withholding** link.
7.  Click the **Withholding Types Report** link. The system navigates to the Types page.
8.  Click the **Find an Existing Value** tab.
9.  Enter a **Run Control ID** or leave blank to search for all Run Control IDs.
10. Click the **Search** button.
11. Select the Run Control ID from the search results. The system navigates to the Withhold Type page.
12. Click the **Run** button. (No Parameters are required.) The system generates the Process Scheduler Request popup window.
13. Click the **OK** button.
14. Click the **Process Monitor** link to verify the report ran to Success and is posted.
15. After verifying the process runs to Success, click the **Go back to Types** link. The system navigates back to the Types page.
16. Click the **Report Manager** link. The system navigates to the Report Manager page.
17. Click on the `APX 7020` Report link in the Report Manager to view the report.

> [!NOTE]
> The most common class used by USG institutions is the 1099N Class 01 for non-employee compensation. (NOTE: Before CY 2020, non-employee compensations were 1099-MISC Class 07). However, when setting up a 1099 Supplier, users can assign any type and class, as appropriate.

The `APX7020` Report prints all Withholding Types and Classes. There are seven Withholding Types in the system which may show up on the report:

- **1099**: 1099 Withholding (1099 Miscellaneous income withheld before CY2020)
- **1099M**: 1099 Miscellaneous Withholding
- **1099N**: 1099 NEC Withholding
- **1099G**: Certain Government Payments
- **1099I**: Interest Income
- **NRA**: Nonresident Alien
- **PPA**: Prescribed Payments System

> [!IMPORTANT]
> For any withholding reporting years after CY2019, institutions will only use 1099M and 1099N Withholding Types and Classes.

# APPENDIX C: 1099 WITHHOLDING REPORTING PROCESS OVERVIEW

![1099 WITHHOLDING REPORTING PROCESS OVERVIEW](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288100/p86_APPENDIX_C_1099_WITHHOLDING_REPORTING_PROCESS_OVER_q4ci2v.png)
