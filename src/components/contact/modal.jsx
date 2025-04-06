import { MessageButton } from '../components/MessageButton';

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      
      {/* Other content */}
      <div className="mb-8">
        <p>Feel free to reach out to us with any questions or feedback.</p>
      </div>
      
      {/* Message button with modal */}
      <MessageButton />
    </div>
  );
}