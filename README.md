# K5 Day 02 — Instructor Lab Slides: Discovery & Problem Framing

Slide deck giảng viên cho buổi lab **Discovery & Problem Framing** (VinUni K5 · Level 3, lớp L3A & L3B).

## Xem trực tiếp

- **GitHub Pages:** https://sagitakdx.github.io/k5-day02-instructor-slides/
- **Chạy local:** Mở trực tiếp file `index.html` trong bất kỳ trình duyệt hiện đại nào (Chrome, Safari, Edge, Firefox). Không cần build step hay cài đặt npm dependencies.

---

## Luồng trình chiếu (Presentation Flow)

Buổi lab kéo dài 240 phút (4 tiếng), đi trọn vẹn nửa đầu mô hình **Double Diamond**:

```text
     DISCOVER (mở rộng)              DEFINE (thu hẹp)
   ◇ cá nhân scan rộng  ──────▶  ◇ nhóm hội tụ về 1 Problem Statement
   CP1 → CP2                       CP3 → CP4 → CP5 → CP6
```

Deck gồm đúng 18 slide tương ứng với 4 giai đoạn:

1. **Khởi động & Nguyên tắc (Slide 0–5):**
   - Slide 0: Giới thiệu K5 · L3 · Day 02 — Discovery & Problem Framing
   - Slide 1: Hình thức phối hợp (Cá nhân CP0/1/2/7 + Nhóm CP3-6) & Double Diamond
   - Slide 2: 4 Mục tiêu học tập (Actor/Quy trình/Bottleneck, Mom Test, Problem Statement v0/v1, AI Ladder)
   - Slide 3: Lịch trình 240 phút chi tiết (bảng CP0–CP7 và 2 lần nghỉ 10')
   - Slide 4: Fork repo nhóm trưởng & Đặt tên file cá nhân đúng quy tắc
   - Slide 5: Luật vàng liêm chính & Ranh giới sử dụng AI (AI Boundaries)

2. **Pha Discover cá nhân (Slide 6–8):**
   - Slide 6: **CP0 — Đọc bài mẫu** (15 phút, cá nhân)
   - Slide 7: **CP1 — Scan 5+ problems & 4 lăng kính** (25 phút, cá nhân)
   - Slide 8: **CP2 — Top 3 Problem Cards & Quy trình nháp có bottleneck** (35 phút, cá nhân)

3. **Chuyển giao & Pha Define nhóm (Slide 9–14):**
   - Slide 9: **Nghỉ giải lao 10 phút** & Chuyển giao Discover ➔ Define
   - Slide 10: **CP3 — Hội tụ nhóm bằng cây OST & Bảng chấm điểm 7 tiêu chí** (30 phút, nhóm)
   - Slide 11: **CP4 — Kiểm chứng The Mom Test & Market Research (Cấm bịa)** (30 phút, nhóm)
   - Slide 12: **CP5 — Quy trình Trước/Sau & Problem Statement v0** (45 phút, nhóm)
   - Slide 13: **CP6a — AI Intervention Ladder: No AI / Rule / Workflow / Agent** (nhóm)
   - Slide 14: **CP6b — Problem Statement v1, 4 Rủi ro & Quyết định Go/Not Yet/No-Go** (nhóm, 25 phút tổng CP6)

4. **Đóng gói, Đánh giá & Khởi động (Slide 15–17):**
   - Slide 15: **CP7 — Reflection cá nhân & Chuỗi 6 mắt xích** (15 phút, cá nhân)
   - Slide 16: **Thang điểm Rubric 40+60 (Bonus ≤ 10) & Các lỗi trừ điểm nặng**
   - Slide 17: **Checklist nộp bài & Nút bấm Kickoff Timer CP0**

---

## Bảng phím tắt & Điều khiển

| Phím / Thao tác | Chức năng |
|---|---|
| `→` / `Space` / `PageDown` | Chuyển tới slide kế tiếp |
| `←` / `PageUp` | Quay lại slide trước |
| `Home` / `End` | Nhảy về slide đầu tiên (Slide 0) / slide cuối cùng (Slide 17) |
| **Rail CP (Header)** | Nhấn vào các mốc `CP0` – `CP7` trên thanh header để nhảy trực tiếp tới Checkpoint |
| **Dots (Footer)** | 18 chấm tiến độ trực quan, click để tới slide bất kỳ |
| **Timer Panel** | Đồng hồ đếm ngược tự động nhận diện và nạp số phút của slide CP hiện tại |
| `P` | Tạm dừng (Pause) hoặc Tiếp tục (Resume) đồng hồ |
| `R` | Đặt lại (Reset) đồng hồ về đúng số phút của Checkpoint hiện tại |
| `M` | Bật / Tắt âm thanh chuyển slide (**Mặc định: TẮT** - Muted) |
| `N` | Bật / Tắt ngăn kéo Ghi chú Giảng viên (**Speaker Notes Drawer**) |
| `F` | Bật / Tắt chế độ toàn màn hình (Fullscreen) |
| **Touch Swipe** | Vuốt sang trái (slide tiếp) hoặc vuốt sang phải (slide trước) trên tablet / màn hình cảm ứng |

---

## Tính năng nâng cao dành cho Giảng viên

1. **Typography tiếng Việt chuẩn xác:** Sử dụng font *Be Vietnam Pro* và *JetBrains Mono*, hiển thị sắc nét toàn bộ dấu thanh tiếng Việt trên màn hình máy chiếu độ phân giải cao.
2. **Âm thanh Web Audio Synth:** Tạo hiệu ứng whoosh nhẹ nhàng bằng Web Audio API thuần (không phụ thuộc file âm thanh bên ngoài). Trạng thái bật/tắt được lưu vào `localStorage`.
3. **Giảm chuyển động (Accessibility):** Tự động tôn trọng cấu hình `prefers-reduced-motion: reduce` của hệ thống để triệt tiêu hiệu ứng chuyển động và âm thanh khi cần thiết.
4. **Speaker Notes tích hợp:** Mỗi slide đều có phần ghi chú giảng viên tương ứng, nhắc nhở về pacing, lưu ý sư phạm, anti-pattern và câu hỏi vấn đáp cho sinh viên.
