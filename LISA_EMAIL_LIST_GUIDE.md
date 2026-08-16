# My Locs Thrive Email List Guide

The website collects email addresses through Netlify Forms. Nothing is sent to WhatsApp.

## The separate lists

The site currently uses these form names:

1. `locs-thrive-guide` for people requesting the Gentle Starter Guide.
2. `locs-thrive-circles` for people asking to hear when Learning Circles open.
3. `locs-thrive-contact` for contact-page messages.

The guide form also stores a `source` value. This shows whether the visitor joined from the homepage guide section or after completing the self-check.

## View and export email addresses

1. Sign in to Netlify and open the My Locs Thrive project.
2. Open the **Forms** tab.
3. Select the form name you want to review.
4. Review verified submissions and check the spam list when necessary.
5. Select **Download as CSV** to save the current verified list as a spreadsheet.

## Turn on form detection

Netlify must detect the forms during deployment.

1. Open the site's **Forms** tab.
2. Open **Usage and configuration**.
3. Confirm that form detection is enabled.
4. If it was disabled, enable it and redeploy the site.

## Optional email notifications

Lisa can receive an email notification when a new verified form is submitted.

1. Open **Project configuration**.
2. Open **Notifications**.
3. Open **Emails and webhooks**.
4. Add a form submission notification.
5. Choose one specific form or all forms and enter Lisa's preferred website-management email address.

Notifications are optional. The complete submission list remains available in the Forms tab even when notifications are off.

## First deployment check

After the updated site is deployed:

1. Submit one test email through the Gentle Starter Guide form.
2. Confirm that the success message and PDF download link appear.
3. Confirm that the test address appears under `locs-thrive-guide` in Netlify Forms.
4. Submit one different test address through the Learning Circles form.
5. Confirm that it appears under `locs-thrive-circles`.
6. Delete or mark the test entries after verification if Lisa does not want them retained.

## Privacy reminder

Email addresses should remain in the website's approved email system or an authorised mailing platform. Do not move subscriber lists into WhatsApp groups or share exported files casually. Keep CSV exports in a protected folder and delete outdated copies when they are no longer needed.

## Official Netlify references

1. Form setup: https://docs.netlify.com/manage/forms/setup/
2. Form submissions and CSV export: https://docs.netlify.com/manage/forms/submissions/
3. Form notifications: https://docs.netlify.com/manage/forms/notifications/
