import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import AcademyPage from "../pages/AcademyPage";
import FAQsPage from "../pages/FAQsPage";
import TestimonialPage from "../pages/TestimonialPage";
import ContactPage from "../pages/ContactPage";
import PrivateClass from "../pages/services/PrivateClass";
import AcademyClass from "../pages/services/AcademyClass";

const SiteRoute = () => {
  return(
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/services' element={<ServicePage />}>
        <Route path="private-class" element={<PrivateClass />} />
        <Route path="academy-class" element={<AcademyClass />} />
      </Route>
      <Route path='/academy' element={<AcademyPage />}/>
      <Route path='/faqs' element={<FAQsPage />}/>
      <Route path='/testimonials' element={<TestimonialPage />}/>
      <Route path='/contact' element={<ContactPage />}/> 
    </Routes>
  )
}

export default SiteRoute;