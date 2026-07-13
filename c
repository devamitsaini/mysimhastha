/* ======================================================
   TEMPLES PAGE
===================================================== */

.temples-page {
  padding: 25px 0 30px;
  background: #f8fbff;
}

.temples-header {
  text-align: center;
  margin-bottom: 24px;
}

.temples-header h1 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0F172A;
  margin: 0 0 8px;
}

.temples-header p {
  font-size: 1rem;
  color: #64748B;
  margin: 0;
}

.temples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.temple-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.temple-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.temple-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.temple-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.temple-content {
  padding: 16px;
}

.temple-content h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0 0 8px;
}

.temple-description {
  font-size: 0.85rem;
  color: #64748B;
  margin: 0 0 12px;
  line-height: 1.4;
}

.temple-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.temple-detail {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #475569;
}

.temple-detail svg {
  font-size: 0.9rem;
  color: #6366F1;
}

.temple-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #6366F1;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.3s ease;
}

.temple-btn:hover {
  background: #4F46E5;
}

/* ======================================================
   RESPONSIVE
===================================================== */

@media (max-width: 768px) {
  .temples-page {
    padding: 20px 0 24px;
  }

  .temples-header h1 {
    font-size: 1.5rem;
  }

  .temples-header p {
    font-size: 0.9rem;
  }

  .temples-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .temple-image {
    height: 140px;
  }

  .temple-content {
    padding: 12px;
  }

  .temple-content h2 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .temples-header h1 {
    font-size: 1.3rem;
  }

  .temple-image {
    height: 120px;
  }

  .temple-content h2 {
    font-size: 0.95rem;
  }

  .temple-description {
    font-size: 0.8rem;
  }
}