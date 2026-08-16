from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Gentle_Starter_Guide.pdf"

FOREST = colors.HexColor("#244536")
FOREST_DEEP = colors.HexColor("#173126")
CREAM = colors.HexColor("#F8F3EB")
PAPER = colors.HexColor("#FFFDF8")
ROSE = colors.HexColor("#B96868")
ROSE_SOFT = colors.HexColor("#EED9D4")
SAGE = colors.HexColor("#DCE5D9")
INK = colors.HexColor("#253029")
MUTED = colors.HexColor("#626A64")
LINE = colors.HexColor("#D9D2C7")

PAGE_W, PAGE_H = A4
MARGIN_X = 22 * mm
MARGIN_TOP = 25 * mm
MARGIN_BOTTOM = 20 * mm

pdfmetrics.registerFont(TTFont("MLT-Sans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("MLT-Sans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("MLT-Serif", "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"))


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Brand",
    parent=styles["Normal"],
    fontName="MLT-Sans-Bold",
    fontSize=9,
    leading=12,
    textColor=FOREST,
    spaceAfter=8,
    tracking=1.6,
))
styles.add(ParagraphStyle(
    name="Eyebrow",
    parent=styles["Normal"],
    fontName="MLT-Sans-Bold",
    fontSize=8,
    leading=11,
    textColor=ROSE,
    spaceAfter=9,
    tracking=1.3,
))
styles.add(ParagraphStyle(
    name="TitleMLT",
    parent=styles["Title"],
    fontName="MLT-Serif",
    fontSize=29,
    leading=32,
    textColor=FOREST,
    alignment=TA_LEFT,
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="CoverTitle",
    parent=styles["Title"],
    fontName="MLT-Serif",
    fontSize=48,
    leading=50,
    textColor=FOREST,
    alignment=TA_LEFT,
    spaceAfter=18,
))
styles.add(ParagraphStyle(
    name="Subtitle",
    parent=styles["Normal"],
    fontName="MLT-Serif",
    fontSize=15,
    leading=22,
    textColor=INK,
    spaceAfter=14,
))
styles.add(ParagraphStyle(
    name="BodyMLT",
    parent=styles["BodyText"],
    fontName="MLT-Sans",
    fontSize=9.5,
    leading=15,
    textColor=INK,
    spaceAfter=9,
))
styles.add(ParagraphStyle(
    name="BodySmall",
    parent=styles["BodyText"],
    fontName="MLT-Sans",
    fontSize=8.5,
    leading=13,
    textColor=MUTED,
    spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="SectionHead",
    parent=styles["Heading2"],
    fontName="MLT-Serif",
    fontSize=17,
    leading=21,
    textColor=FOREST,
    spaceBefore=8,
    spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="CardHead",
    parent=styles["Heading3"],
    fontName="MLT-Sans-Bold",
    fontSize=9,
    leading=12,
    textColor=FOREST,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="CoverSmall",
    parent=styles["Normal"],
    fontName="MLT-Sans-Bold",
    fontSize=8,
    leading=12,
    textColor=FOREST,
    tracking=1,
))


def paragraph(text, style="BodyMLT"):
    return Paragraph(text, styles[style])


def checkbox_row(text):
    box = Table([["", paragraph(text)]], colWidths=[7 * mm, 145 * mm])
    box.setStyle(TableStyle([
        ("BOX", (0, 0), (0, 0), 0.8, FOREST),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 0),
        ("TOPPADDING", (0, 0), (0, 0), 0),
        ("BOTTOMPADDING", (0, 0), (0, 0), 0),
        ("LEFTPADDING", (1, 0), (1, 0), 5),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("TOPPADDING", (1, 0), (1, 0), 0),
        ("BOTTOMPADDING", (1, 0), (1, 0), 2),
    ]))
    return box


def checklist(items):
    flow = []
    for item in items:
        flow.extend([checkbox_row(item), Spacer(1, 3 * mm)])
    return flow


def note_box(label, text):
    table = Table([[Paragraph(f"<b>{label}</b> {text}", styles["BodyMLT"])]], colWidths=[PAGE_W - 2 * MARGIN_X])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ROSE_SOFT),
        ("LINEBEFORE", (0, 0), (0, 0), 3, ROSE),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return table


def notes_lines(count=4):
    rows = [[""] for _ in range(count)]
    table = Table(rows, colWidths=[PAGE_W - 2 * MARGIN_X], rowHeights=[9 * mm] * count)
    table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.55, LINE),
    ]))
    return table


def page_header(number, label, title, intro):
    return [
        paragraph(f"{number}  {label.upper()}", "Eyebrow"),
        paragraph(title, "TitleMLT"),
        paragraph(intro),
        Spacer(1, 4 * mm),
    ]


def draw_cover(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(CREAM)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(SAGE)
    canvas.rect(0, 0, PAGE_W, 74 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(ROSE)
    canvas.setLineWidth(1.2)
    canvas.circle(PAGE_W - 32 * mm, PAGE_H - 35 * mm, 15 * mm, fill=0, stroke=1)
    canvas.setFillColor(FOREST)
    canvas.setFont("MLT-Sans-Bold", 10)
    canvas.drawCentredString(PAGE_W - 32 * mm, PAGE_H - 37 * mm, "MLT")
    canvas.restoreState()


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.line(MARGIN_X, 15 * mm, PAGE_W - MARGIN_X, 15 * mm)
    canvas.setFont("MLT-Sans", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN_X, 10 * mm, "MY LOCS THRIVE")
    canvas.drawRightString(PAGE_W - MARGIN_X, 10 * mm, str(doc.page))
    canvas.restoreState()


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="The Gentle Starter Guide",
        author="Dr Lisa, My Locs Thrive",
        subject="A practical introduction to beginning a loc journey",
    )
    frame = Frame(MARGIN_X, MARGIN_BOTTOM, PAGE_W - 2 * MARGIN_X, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM, id="content")
    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[frame], onPage=draw_cover, autoNextPageTemplate="body"),
        PageTemplate(id="body", frames=[frame], onPage=draw_page, autoNextPageTemplate="body"),
    ])

    story = [
        Spacer(1, 12 * mm),
        paragraph("MY LOCS THRIVE", "Brand"),
        Spacer(1, 37 * mm),
        paragraph("A CALM PLACE TO BEGIN", "Eyebrow"),
        paragraph("The Gentle<br/>Starter Guide", "CoverTitle"),
        paragraph("A practical introduction for considering locs or navigating the first stage of the journey.", "Subtitle"),
        Spacer(1, 54 * mm),
        note_box("A gentle reminder:", "You do not need perfect hair knowledge. You need a healthy foundation, curiosity, patience and the will to begin."),
        Spacer(1, 18 * mm),
        paragraph("PREPARED BY DR LISA", "CoverSmall"),
        paragraph("Medical doctor and loc wearer", "BodySmall"),
        PageBreak(),
    ]

    story.extend(page_header(
        "01", "Before starting", "Begin with better questions.",
        "Locs are a long-term hair-care choice, not a shortcut to never thinking about your hair again. Use these prompts to bring your real life into the decision.",
    ))
    story.extend(checklist([
        "What do I hope locs will make simpler?",
        "How do I feel about visible change and imperfect stages?",
        "What maintenance time and cost can I realistically sustain?",
        "Do I want professional maintenance, self-maintenance or both?",
        "Which work, exercise, swimming or headwear needs should I discuss?",
    ]))
    story.extend([
        note_box("Keep in mind:", "You do not need perfect certainty. You need enough information to understand the commitment and know where to ask for help."),
        Spacer(1, 7 * mm),
        paragraph("My reasons and questions", "SectionHead"),
        notes_lines(4),
        PageBreak(),
    ])

    story.extend(page_header(
        "02", "Establishment methods", "Learn the language before the consultation.",
        "A useful consultation should explain the options, why a method may suit your goals and what the maintenance process involves.",
    ))
    methods = [
        [paragraph("Common starting approaches", "CardHead"), paragraph("Questions to ask", "CardHead")],
        [paragraph("Comb coils<br/>Two-strand twists<br/>Braids or plaits<br/>Interlocking<br/>Instant loc techniques<br/>Freeform or semi-freeform approaches", "BodyMLT"),
         paragraph("Why does this method suit my goals and hair?<br/>How will the sections affect future loc size?<br/>What is the early cleansing guidance?<br/>What maintenance technique and timing are expected?<br/>What is the likely cost?<br/>What happens if a loc loosens?", "BodyMLT")],
    ]
    methods_table = Table(methods, colWidths=[76 * mm, 76 * mm])
    methods_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SAGE),
        ("BACKGROUND", (0, 1), (-1, 1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.7, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.extend([
        methods_table,
        Spacer(1, 8 * mm),
        note_box("Remember:", "No single method is universally best. A qualified loctician should explain why a method fits your goals, not simply tell you that it does."),
        Spacer(1, 8 * mm),
        paragraph("Consultation notes", "SectionHead"),
        notes_lines(4),
        PageBreak(),
    ])

    story.extend(page_header(
        "03", "First month", "A simple care checklist.",
        "The first month is less about making starter locs look finished and more about allowing a new structure and routine to settle.",
    ))
    story.extend(checklist([
        "Save your loctician's method-specific cleansing and maintenance instructions.",
        "Take clear starting photographs for your own reference.",
        "Protect locs from avoidable lint and friction while sleeping.",
        "Avoid repeatedly twisting or handling roots for a freshly maintained look.",
        "Ask before adding products just in case.",
        "Write down discomfort, scalp changes or questions instead of guessing.",
        "Confirm the next professional check-in if that is part of your plan.",
    ]))
    story.extend([
        Spacer(1, 4 * mm),
        paragraph("What I noticed", "SectionHead"),
        notes_lines(4),
        PageBreak(),
    ])

    story.extend(page_header(
        "04", "Myths and expectations", "Release the pressure to do it perfectly.",
        "A kinder journey begins when unrealistic expectations are replaced with useful, honest information.",
    ))
    myths = [
        ("Locs mean no maintenance.", "They may reduce daily manipulation, but cleansing, observation and a sustainable maintenance plan still matter."),
        ("Every starter loc should develop at the same pace.", "Texture, location, method and routine can create variation across one head."),
        ("Frizz means failure.", "Frizz and loose hairs can be part of an evolving starter-loc stage. Method-specific concerns belong with your loctician."),
        ("Pain proves a style is neat or secure.", "You do not need to accept significant pain. Ask for excessive tension to be adjusted."),
    ]
    myth_rows = [[paragraph("MYTH", "Eyebrow"), paragraph("A MORE HONEST VIEW", "Eyebrow")]]
    myth_rows.extend([[paragraph(myth), paragraph(reality)] for myth, reality in myths])
    myth_table = Table(myth_rows, colWidths=[68 * mm, 84 * mm])
    myth_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), FOREST),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, -1), PAPER),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [PAPER, CREAM]),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.7, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.extend([
        myth_table,
        Spacer(1, 8 * mm),
        paragraph("One expectation I am ready to release", "SectionHead"),
        notes_lines(3),
        PageBreak(),
    ])

    story.extend(page_header(
        "05", "Professional support", "Know who to ask.",
        "Healthy foundations include knowing when a question belongs with a qualified loctician and when a health concern belongs with a clinician.",
    ))
    support = Table([
        [paragraph("A qualified loctician", "CardHead"), paragraph("An appropriate clinician", "CardHead")],
        [paragraph("Method selection, installation, parting, unraveling, retwisting or interlocking, product build-up and maintenance technique.", "BodyMLT"),
         paragraph("Persistent or worsening itching, scaling or inflammation; pain, sores, pus or marked swelling; a spreading rash; sudden or patchy hair loss; or concerns that health or medication changes may be affecting your hair.", "BodyMLT")],
    ], colWidths=[76 * mm, 76 * mm])
    support.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), SAGE),
        ("BACKGROUND", (1, 0), (1, 0), ROSE_SOFT),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.7, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.extend([
        support,
        Spacer(1, 8 * mm),
        note_box("Important:", "This guide cannot diagnose a scalp or hair condition. Do not delay urgent or necessary care because of online information."),
        Spacer(1, 8 * mm),
        paragraph("My support plan", "SectionHead"),
        paragraph("Loctician or consultation contact", "BodySmall"),
        notes_lines(2),
        Spacer(1, 5 * mm),
        paragraph("Questions I want to ask", "BodySmall"),
        notes_lines(3),
        Spacer(1, 8 * mm),
        paragraph("Grow healthy locs. Enjoy the process.", "Subtitle"),
        paragraph("For personal, non-commercial use. General education only. This guide is not personal medical or professional hair-care advice.", "BodySmall"),
    ])

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
