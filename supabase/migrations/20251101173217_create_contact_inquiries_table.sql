/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Full name of the person making the inquiry
      - `email` (text) - Email address for contact
      - `phone` (text, optional) - Phone number for contact
      - `message` (text) - Message content from the inquiry
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of inquiry (pending, contacted, resolved)

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting new inquiries (public access for form submissions)
    - Add policy for authenticated users/admins to read inquiries

  3. Important Notes
    - The insert policy allows anyone to submit inquiries through the contact form
    - Only authenticated users can view inquiries (for admin/staff access)
    - Default status is 'pending' for new inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiry status"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
