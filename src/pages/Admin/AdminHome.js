import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin! <i className="text-success">{user?.name}</i>
          </h1>
          
          <hr />
         <p>
  🩸 <strong>🩸 Blood Bank Admin Dashboard</strong><br /><br />
  
  Manage the blood bank efficiently with real-time data, donor records, and inventory tracking.<br /><br />
  <strong>📊 Dashboard Overview</strong><br />
  🔴 <strong>Total Blood Units Available:</strong> [XX]<br />
  🏥 <strong>Registered Hospitals/Organizations:</strong> [XX]<br />
  👥 <strong>Total Registered Donors:</strong> [XX]<br />
  🆘 <strong>Urgent Blood Requests:</strong> [XX]<br /><br />
  <strong>🔍 Blood Inventory Management</strong><br />
  ✅ View Available Blood Stock<br />
  ➕ Add New Blood Units<br />
  ➖ Update &amp; Remove Expired Units<br />
  🔄 Track Blood Donations &amp; Transfusions<br /><br />
  <strong>👤 Donor &amp; Receiver Management</strong><br />
  🩸 View &amp; Verify New Donors<br />
  📜 Approve Blood Requests<br />
  🚀 Notify Donors for Urgent Needs<br />
  📞 Contact Registered Donors<br /><br />
  <strong>🏥 Hospital &amp; Organization Management</strong><br />
  🔹 View &amp; Approve Blood Requests<br />
  
</p>

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;