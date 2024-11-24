import React from "react";

function Map() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-2 mb-40 px-6 sm:px-12">
      {/* Map Column */}
      <div className="flex justify-center items-center ml-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13071.968426179723!2d25.432243207711075!3d36.38862483517209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce41ee7938ab%3A0x82aa2ace4a74f614!2sWhite%20%26%20Co.%20Exclusive%20Island%20Villas!5e0!3m2!1sen!2sza!4v1732268138619!5m2!1sen!2sza"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address Column */}
      <div className="flex flex-col justify-center w-full space-y-4">
        <h2 className="font-semibold text-2xl">Where We Are Located</h2>
        <p className="text-lg">
          Address: Imerovigli
          <br />
          Postal Code(ZIP): 847 000
          <br />
          City/ Location: Santorini
        </p>
        <p className="text-lg">Phone: +1 (555) 555-5555</p>
      </div>
    </div>
  );
}

export default Map;
