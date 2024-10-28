from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime, date, timezone


class Role(SQLModel, table=True):
    RoleID: Optional[int] = Field(default=None, primary_key=True)
    Name: str


class User(SQLModel, table=True):
    UserID: Optional[int] = Field(default=None, primary_key=True)
    Email: str = Field(index=True)
    FirstName: str
    LastName: str
    PhoneNumber: Optional[str] = None
    CountryOfResidence: Optional[str] = None
    ZipCode: Optional[int] = None
    PasswordHash: str
    CreatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    UpdatedAt: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": datetime.now(timezone.utc)},
    )
    IsActive: bool = Field(default=True)
    DateOfBirth: Optional[date] = None
    RoleID: Optional[int] = Field(foreign_key="role.RoleID")


class Category(SQLModel, table=True):
    CategoryID: Optional[int] = Field(default=None, primary_key=True)
    Name: str


class SubCategory(SQLModel, table=True):
    SubCategoryID: Optional[int] = Field(default=None, primary_key=True)
    Name: str
    CategoryID: Optional[int] = Field(foreign_key="category.CategoryID")


class Venue(SQLModel, table=True):
    VenueID: Optional[int] = Field(default=None, primary_key=True)
    Name: str
    Location: Optional[str] = None
    Capacity: Optional[int] = None
    PhoneNumber: Optional[str] = None
    Email: Optional[str] = None
    Type: str


class Event(SQLModel, table=True):
    EventID: Optional[int] = Field(default=None, primary_key=True)
    Name: str
    Description: Optional[str] = None
    ImageUrl: Optional[str] = None
    Date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    Status: Optional[str] = None
    TotalTickets: int
    AvailableTickets: int
    CreatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    UpdatedAt: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": datetime.now(timezone.utc)},
    )
    CategoryID: Optional[int] = Field(foreign_key="category.CategoryID")
    VenueID: Optional[int] = Field(foreign_key="venue.VenueID")


class Seat(SQLModel, table=True):
    SeatID: Optional[int] = Field(default=None, primary_key=True)
    SeatNumber: str
    Section: Optional[str] = None
    Row: Optional[str] = None
    VenueID: Optional[int] = Field(foreign_key="venue.VenueID")


class Payment(SQLModel, table=True):
    PaymentID: Optional[int] = Field(default=None, primary_key=True)
    PaymentMethod: Optional[str] = None
    Status: Optional[str] = None
    Amount: float
    CreatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class Order(SQLModel, table=True):
    OrderID: Optional[int] = Field(default=None, primary_key=True)
    TotalAmount: float
    CreatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    UserID: Optional[int] = Field(foreign_key="user.UserID")
    PaymentID: Optional[int] = Field(foreign_key="payment.PaymentID")


class Ticket(SQLModel, table=True):
    TicketID: Optional[int] = Field(default=None, primary_key=True)
    Number: str
    Amount: float
    OrderID: Optional[int] = Field(foreign_key="order.OrderID")
    SeatID: Optional[int] = Field(foreign_key="seat.SeatID")


class UserEvent(SQLModel, table=True):
    UserID: Optional[int] = Field(foreign_key="user.UserID", primary_key=True)
    EventID: Optional[int] = Field(foreign_key="event.EventID", primary_key=True)
