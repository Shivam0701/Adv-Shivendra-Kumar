import React, { useState, useEffect, useRef } from "react";
import { Send, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

  // ✅ Formspree hook
  const [state, handleSubmit] = useForm("xjgvzwwd");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // ✅ Success toast
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Consultation Request Sent",
        description:
          "Thank you for reaching out. We will contact you shortly.",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <div className="section-badge">
            <Scale size={18} />
            <span>Contact Us</span>
          </div>
          <h2 className="section-title">Schedule a Consultation</h2>
          <p className="section-description">
            Get in touch to discuss your legal needs. We are here to help you
            navigate your legal challenges.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? "slide-up" : ""}`}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <Input
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <Input
                  name="phone"
                  type="tel"
                  required
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <Input
                  name="subject"
                  type="text"
                  required
                  className="form-input"
                  placeholder="What is this regarding?"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <Textarea
                name="message"
                required
                className="form-textarea"
                placeholder="Please describe your legal matter..."
                rows={6}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <Button
              type="submit"
              className="form-submit-btn"
              size="lg"
              disabled={state.submitting}
            >
              {state.submitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Consultation Request</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
