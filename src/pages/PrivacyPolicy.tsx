const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl animate-fade-in">
      <div className="space-y-12">
        {/* Privacy Policy */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            This application is an independent, community-maintained project and is not affiliated with any public organizations or schools. 
            Your username (User Id) and Device Id might be collected for automated services (to ensure such service is not abused), based on your agreement to this additional service. 
            Apart from that, We do not collect, store, analyze, or transmit any personal data or usage analytics to our servers or any third parties. 
            Your credentials, if stored, are kept securely and locally on your device. 
            By choosing to use this application, you acknowledge and accept that, because the source code is publicly available, there is an inherent risk of data exposure that cannot be entirely eliminated despite our best efforts to use secure storage mechanisms.
          </p>
        </section>

        {/* Legal Notice */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Legal Notice</h2>
          <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
            <p>
              This application is provided on an "as is" basis, without warranties of any kind, whether express or implied, including but not limited to merchantability or fitness for a particular purpose. 
              The authors and contributors shall not be liable for any claims, damages, or other liabilities, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.
            </p>
            <p>
              Network requests may be made to your institution's official services when you sign in or fetch data; such requests are initiated by you and are limited to the necessary interactions with those services.
            </p>
          </div>
        </section>

        {/* License */}
        <section>
          <h2 className="text-3xl font-bold mb-6">License</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            This application is licensed under the GNU General Public License (GPL) version 3. 
            You are permitted to use, modify, and redistribute this software under the terms of the GNU GPL, including making the corresponding source code available to recipients. 
            For the precise conditions and obligations, please refer to <a href="https://www.gnu.org/licenses/gpl-3.0.txt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.gnu.org/licenses/gpl-3.0.txt</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
